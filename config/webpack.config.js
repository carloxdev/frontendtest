const path = require('path');
const MiniCSSExtract = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const basePath = __dirname;
const distPath = '../app/static/build';
const distImages = '../../../app/static/images/';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        home: ['@babel/polyfill', './src/pages/home/index.js'],
        about: ['@babel/polyfill', './src/pages/about/index.js'],
        contact: ['@babel/polyfill', './src/pages/contact/index.js'],
        services: ['@babel/polyfill', './src/pages/services/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                use: [
                  'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtract.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: distImages,
                      // publicPath: 'images/',
                    },
                  },
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtract({
            filename: "[name].min.css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        // This is where webpack-dev-server serves your bundle
        // which is created in memory.
        // To use the in-memory bundle,
        // your <script> 'src' should point to the bundle
        // prefixed with the 'publicPath', e.g.:
        //   <script src='http://localhost:9001/assets/bundle.js'>
        //   </script>        
        publicPath: '/static/',
        contentBase: path.resolve(__dirname, "../app/"),
        watchContentBase: true,
        compress: true,
        port: 9001
    },
};

module.exports = webpackInitConfig;