const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');

const basePath = __dirname;
const distPath = '../build';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['@babel/polyfill', './app/scripts/test.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtract.loader,
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCSSExtract({
            filename: "[name].css"
        })
    ],
    devServer: {
        // This is where webpack-dev-server serves your bundle
        // which is created in memory.
        // To use the in-memory bundle,
        // your <script> 'src' should point to the bundle
        // prefixed with the 'publicPath', e.g.:
        //   <script src='http://localhost:9001/assets/bundle.js'>
        //   </script>        
        publicPath: '/test/',
        contentBase: path.resolve(__dirname, "../app/views/"),
        watchContentBase: true,
        compress: true,
        port: 9001
    }
};

module.exports = webpackInitConfig;