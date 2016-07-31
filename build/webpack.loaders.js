const ExtractTextPlugin = require("extract-text-webpack-plugin");

// loaders 
module.exports = [
    {test: /\.vue$/, loader: 'vue' },
    {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
    {test: /\.less$/, loader: ExtractTextPlugin.extract( "style-loader", 'css-loader?sourceMap!autoprefixer-loader!less-loader')},
    {test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
    {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
    {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
    {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
    {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
];