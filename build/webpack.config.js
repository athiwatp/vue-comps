const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let Loaders = require('./webpack.loaders.js');

module.exports = {
    module: {
        loaders: Loaders
    },
    resolve: {
        alias: {
            'style': __dirname + '../components/style'
        }
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
            {from: './src/index.html', to: './index.html'},
        ])
    ]
};