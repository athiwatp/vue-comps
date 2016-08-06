const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let base = require('./webpack.base.js');

let config = Object.assign({}, base, {
    //the entry of our app
    entry: {
        app: ['./src/entry.js']
    },
    output: {
      path: path.resolve(__dirname, '../www'),
      contentBase: 'www/',
      filename: 'app.js'
    }
})
  
if (process.env.NODE_ENV === 'production') {
  config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]);
  delete config.devtool;
}

module.exports = config;