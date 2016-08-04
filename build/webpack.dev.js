const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = require('./webpack.config.js');

let webpackConfig = {
  //the entry of our app
  entry: {
      app: ['./src/entry.js']
  },
  output: {
    path: path.resolve(__dirname, '../www'),
    contentBase: 'www/',
    filename: 'app.js'
  },
  module: config.module,
  resolve: config.resolve,
  vue: config.vue,
  babel: config.babel,
  plugins: config.plugins
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ])
}

module.exports = webpackConfig;