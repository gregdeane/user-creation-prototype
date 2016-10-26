import webpack from 'webpack';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import chalk from 'chalk';
import logger from './logger';
import config from '../config/webpack.dev';

const log = logger();

// build success message
const success = (host, port, protocol) => {
  return [
    chalk.green('Compiled successfully\n\n'),
    'The app is running at:\n',
    chalk.cyan(`${protocol}://${host}:${port}/\n\n`),
    'Note that the development build is not optimized.\n',
    `To create a production build, use ${chalk.cyan('npm run build')}`
  ].join('');
};

// get and display issues (linting, etc.)
const issues = (stats) => {
  let messages = formatWebpackMessages(stats.toJson({}, true));
  let errors = messages.errors.length && messages.errors;
  let warnings = messages.warnings.length && messages.warnings;

  log.issues(errors || warnings || [chalk.green('[ No linting errors ]')]);
};

export default (host, port, protocol) => {
  let compiler = webpack(config);

  // `invalid` fires when a file has changed and Webpack is recompiling
  compiler.plugin('invalid', () => {
    log.msg('Compiling...');
  });

  // `done` fires when Webpack has finished recompiling
  // this event will fire even if there are errors/warnings
  compiler.plugin('done', (stats) => {
    issues(stats);
    log.msg(success(host, port, protocol));
  });

  return compiler;
};
