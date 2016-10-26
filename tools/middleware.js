import historyApiFallback from 'connect-history-api-fallback';
import httpProxyMiddleware from 'http-proxy-middleware';
import chalk from 'chalk';
import onProxyError from './proxy';
import logger from './logger';
import paths from '../config/paths';

const log = logger();

export default (devServer) => {
  // `proxy` lets you to specify a fallback server during development.
  // Every unrecognized request will be forwarded to it.
  let proxy = require(paths.packageJson).proxy;

  devServer.use(historyApiFallback({
    // Paths with dots should still use the history fallback.
    // See https://github.com/facebookincubator/create-react-app/issues/387.
    disableDotRule: true,
    // For single page apps, we generally want to fallback to /index.html.
    // However we also want to respect `proxy` for API calls.
    // So if `proxy` is specified, we need to decide which fallback to use.
    // We use a heuristic: if request `accept`s text/html, we pick /index.html.
    // Modern browsers include text/html into `accept` header when navigating.
    // However API calls like `fetch()` won’t generally accept text/html.
    // If this heuristic doesn’t work well for you, don’t use `proxy`.
    htmlAcceptHeaders: proxy ?
      ['text/html'] :
      ['text/html', '*/*']
  }));
  if (proxy) {
    if (typeof proxy !== 'string') {
      log.msg(chalk.red('When specified, "proxy" in package.json must be a string.'));
      log.msg(chalk.red('Instead, the type of "proxy" was "' + typeof proxy + '".'));
      log.msg(chalk.red('Either remove "proxy" from package.json, or make it a string.'));
      process.exit(1);
    }

    // Otherwise, if proxy is specified, we will let it handle any request.
    // There are a few exceptions which we won't send to the proxy:
    // - /index.html (served as HTML5 history API fallback)
    // - /*.hot-update.json (WebpackDevServer uses this too for hot reloading)
    // - /sockjs-node/* (WebpackDevServer uses this for hot reloading)
    // Tip: use https://jex.im/regulex/ to visualize the regex
    let mayProxy = /^(?!\/(index\.html$|.*\.hot-update\.json$|sockjs-node\/)).*$/;
    devServer.use(mayProxy,
      // Pass the scope regex both to Express and to the middleware for proxying
      // of both HTTP and WebSockets to work without false positives.
      httpProxyMiddleware(pathname => mayProxy.test(pathname), {
        target: proxy,
        logLevel: 'silent',
        onError: onProxyError(proxy),
        secure: false,
        changeOrigin: true
      })
    );
  }
  // Finally, by now we have certainly resolved the URL.
  // It may be /index.html, so let the dev server try serving it again.
  devServer.use(devServer.middleware);
};
