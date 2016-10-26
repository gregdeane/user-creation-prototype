import * as helpers from './helpers';

export default {
  root: '/',
  dist: helpers.root('dist'),
  src: helpers.root('src'),
  config: helpers.root('config'),
  html: helpers.root('src', 'index.html'),
  index: helpers.root('src', 'index.jsx'),
  packageJson: helpers.root('package.json')
}
