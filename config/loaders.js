import paths from './paths';

export default [
  {
    test: /\.(js|jsx)$/,
    include: [paths.src, paths.config],
    loader: 'babel'
  },
  {
    test: /\.scss$/,
    include: paths.src,
    loaders: ['style', 'css', 'sass']
  },
  {
    test: /\.css$/,
    loader: 'style!css!postcss'
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
    loader: 'file',
    query: {
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }
];
