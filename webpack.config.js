const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'src')
};

module.exports = {
    entry: {
        app: path.join(PATHS.app, 'index'),
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            }
        ]
    }
};
