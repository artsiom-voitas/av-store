const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        utils: './src/js/utils.js',
        'sign-in': './src/js/sign-in.js',
        'sign-up': './src/js/sign-up.js',
        home: './src/js/home.js',
        clients: './src/js/clients.js',
        map: './src/js/map.js',

    },
    output: {
        assetModuleFilename: 'assets/[hash][ext][query]',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.pug',
            chunks: ["main", "utils", "signIn"],
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/pug/sign-up.pug',
            chunks: ["main", "utils", "signUp"],
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './src/pug/home.pug',
            chunks: ["main", "utils", "home"],
        }),
        new HtmlWebpackPlugin({
            filename: 'clients.html',
            template: './src/pug/clients.pug',
            chunks: ["main", "utils", "clients"],
        }),
        new HtmlWebpackPlugin({
            filename: 'map.html',
            template: './src/pug/map.pug',
            chunks: ["main", "utils", "map"],
        }),
        new MiniCssExtractPlugin( {
            filename: '[name].css'
        }),
        new FaviconsWebpackPlugin('./src/assets/images/logo.png'),
        new CleanWebpackPlugin({
            protectWebpackAssets: false,
            cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node-modules|bower_componennts)/,
            },
        ]
    }
};
