var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require('vue-loader')

module.exports = {
  // the main entry of our app
  entry: {
      app: ['./preview/entry.js']
  },
  // output configuration
  output: {
    path: __dirname + '/dist/',
    contentBase: 'dist/',
    filename: 'app.js'
  },
  // how modules should be transformed
  module: {
    loaders: [
        {test: /\.vue$/, loader: 'vue' },
        {test: /\.less$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader!autoprefixer-loader!less-loader')},
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },
  // configure babel-loader.
  // this also applies to the JavaScript inside *.vue files
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true,
          disable: false
      })
  ]
}