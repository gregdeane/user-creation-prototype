import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles';
import detect from 'detect-port';
import chalk from 'chalk';
import prompt from 'react-dev-utils/prompt';
import clearConsole from 'react-dev-utils/clearConsole';
import runDevServer from './server';
import paths from '../config/paths';

const DEFAULT_PORT = process.env.PORT || 3000;

// warn and crash if required files are missing
if (!checkRequiredFiles([paths.html, paths.index])) {
  process.exit(1);
}

const run = (port) => {
  let protocol = (process.env.HTTPS === 'true' && 'https') || 'http';
  let host = process.env.HOST || 'localhost';

  runDevServer(host, port, protocol);
};

const promptUser = (port) => {
  let question = [
    chalk.yellow(`Something is already running on port ${DEFAULT_PORT}.\n\n`),
    'Would you like to run the app on another port instead?'
  ].join('');

  clearConsole();

  prompt(question, true).then(shouldChangePort => {
    if (shouldChangePort) {
      run(port);
    }
  });
};

// attempt to use the default port. if it's in use, offer to run on
// a different port. `detect()` Promise resolves to the next free port.
detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

  promptUser(port);

});
