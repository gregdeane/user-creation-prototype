import chalk from 'chalk';
import logger from './logger';

const log = logger();

// We need to provide a custom onError function for httpProxyMiddleware.
// It allows us to log custom error messages on the console.
export default (proxy) => {
  return function(err, req, res){
    var host = req.headers && req.headers.host;
    log.msg(
      chalk.red('Proxy error:') + ' Could not proxy request ' + chalk.cyan(req.url) +
      ' from ' + chalk.cyan(host) + ' to ' + chalk.cyan(proxy) + '.'
    );
    log.msg(
      'See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (' +
      chalk.cyan(err.code) + ').\n'
    );

    // And immediately send the proper error response to the client.
    // Otherwise, the request will eventually timeout with ERR_EMPTY_RESPONSE on the client side.
    if (res.writeHead && !res.headersSent) {
      res.writeHead(500);
    }
    res.end('Proxy error: Could not proxy request ' + req.url + ' from ' +
      host + ' to ' + proxy + ' (' + err.code + ').'
    );
  }
};
