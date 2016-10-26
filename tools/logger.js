import clearConsole from 'react-dev-utils/clearConsole';

// display issues (linting, etc.)
const issues = (msgs) => {
  clearConsole();
  msgs.forEach(msg => {
    console.log(msg);
  });
};

// display message
const msg = (msg) => {
  console.log(msg);
};

// default Webpack output is turned off
// present messages/warnings/errors in readable format
export default () => {
  return { msg, issues };
};
