const webpack = require('webpack');
const path = require('path');

module.exports = {
    transpileDependencies: [
        'vuetify',
    ],
    configureWebpack: {
        devServer: {
            contentBase: [path.join(__dirname, 'dist')],
            compress: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    secure: false,
                    changeOrigin: false,
                },
            },
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    },
};
