const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    main: path.resolve(__dirname, './client/src/index.jsx'),
    scan: path.resolve(__dirname, './client/src/scan.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './client/dist/js'),
    filename: '[name]-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
