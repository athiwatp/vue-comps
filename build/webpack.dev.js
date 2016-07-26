var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var Loaders = require('./webpack.loaders.js');

module.exports = {
  // the main entry of our app
  entry: {
      app: ['./preview/entry.js']
  },
  // output configuration
  output: {
    path: path.resolve(__dirname, '../www'),
    contentBase: 'www/',
    filename: 'app.js'
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
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyWebpackPlugin([
          {from: './preview/index.html', to: './index.html'},
      ])
  ]
}