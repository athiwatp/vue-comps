const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const Comps = require('./components.json');
let base = require('./webpack.base.js');

delete base.devtool;

module.exports = Object.assign({}, base, {
  // the entry of every components
  entry: Comps,
  // output configuration
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name]/index.js",
  },
  plugins: [
        new ExtractTextPlugin("[name]/index.css", {
            allChunks: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});