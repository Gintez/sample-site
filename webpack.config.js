var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
