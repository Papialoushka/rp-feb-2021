const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/public/',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      favicon: './src/assets/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types',
      'ReactDom': 'react-dom',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        },
      },
    ],
  },
};
