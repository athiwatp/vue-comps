var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // the main entry of our app
  entry: {
      app: ['./src/index.js']
  },
  // output configuration
  output: {
    path: __dirname + '/dist/',
    contentBase: 'dist/',
    filename: 'app.js'
  },
  // alias
  resolve: {
    alias: {}
  },
  // how modules should be transformed
  module: {
    loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
        {test: /\.less$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!autoprefixer-loader!less-loader')},
        {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/ },
        {test: /\.html$/, loader: 'html'},
        {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
        {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
        {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
    ]
  },
  // configure babel-loader.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
      new ExtractTextPlugin("style.css", {
          allChunks: true
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
      new webpack.optimize.DedupePlugin(),
      new CopyWebpackPlugin([
          {from: './src/index.html', to: './index.html'},
          {from: './src/page', to: './page' }
      ])
  ]
}
