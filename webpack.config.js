module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
        ]
    }
};
