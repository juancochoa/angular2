var path = require('path');
var HW = path.join(__dirname, 'helloworld/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        root: [HW, NODE_MODULES],
        extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
};
