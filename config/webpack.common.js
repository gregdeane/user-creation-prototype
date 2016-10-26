import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import getClientEnvironment from './env';
import * as helpers from './helpers';
import loaders from './loaders';
import paths from './paths';

// provide %PUBLIC_URL% to our app (`index.html` and `process.env.PUBLIC_URL`)
let publicUrl = '';
let env = getClientEnvironment(publicUrl);

export default {
  entry: [
    'react-dev-utils/webpackHotDevClient',
    helpers.root('config', 'polyfills.js'),
    helpers.root('src', 'index.jsx')
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint',
      include: paths.src
    }],
    loaders: loaders
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
      }),
    ];
  },
  sassLoader: {
    includePaths: [
      './src/assets/styles',
      './node_modules/breakpoint-sass/stylesheets',
      'node_modules/dress-code/dist/sass'
    ]
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html,
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
