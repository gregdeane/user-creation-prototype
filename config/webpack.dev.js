import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import paths from './paths';

export default webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: paths.dist,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: paths.root
  }
});
