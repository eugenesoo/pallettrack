const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    path: path.resolve(__dirname, './client/src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
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
