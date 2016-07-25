var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Loaders = require('./webpack.loaders.js');
var Comps = require('./components.json');

module.exports = {
  // the main entry of our app
  entry: Comps,
  // output configuration
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name]/index.js",
  },
  // how modules should be transformed
  module: {
    loaders: Loaders
  },
  // vue-loader configurations
  vue: {
    // configure autoprefixer
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="less"> or other langauges
      less: ExtractTextPlugin.extract("css!less")
    }
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("vue-comps.css", {
          allChunks: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
  ]
};