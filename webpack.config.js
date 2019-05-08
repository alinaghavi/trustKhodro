const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
    context: __dirname,
    entry: {
        allImport: './src/js/all-import.js',
        DashboardIndex: './src/js/DashboardIndex.js',
        DashboardAbout: './src/js/DashboardAbout.js',
        DashboardLogin: './src/js/DashboardLogin.js',
        DashboardOrder: './src/js/DashboardOrder.js',
        DashboardRegister: './src/js/DashboardRegister.js',
        DashboardSignup: './src/js/DashboardSignup.js',
        Details: './src/js/Detail.js',
        Order: './src/js/Order.js',
        Register: './src/js/Register.js',
        Search: './src/js/Search.js',
        Shared: './src/js/Shared.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].bundle.js',
    },
    watch: true,

    devServer: {
        contentBase: path.join(__dirname, './src/'),
        port: 8080
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ],
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        },
                    },
                ],
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '../'
                        }
                      },
                    'css-loader'
                ],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '../'
                        }
                      },
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "[id].css"
          }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardIndex'],
            filename: 'views/Dashboard/Index.html',
            template: './src/views/Dashboard/Index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardAbout'],
            filename: 'views/Dashboard/About.html',
            template: './src/views/Dashboard/About.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardLogin'],
            filename: 'views/Dashboard/Login.html',
            template: './src/views/Dashboard/Login.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardOrder'],
            filename: 'views/Dashboard/order.html',
            template: './src/views/Dashboard/order.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardRegister'],
            filename: 'views/Dashboard/Register.html',
            template: './src/views/Dashboard/register.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'DashboardSignup'],
            filename: 'views/Dashboard/Signup.html',
            template: './src/views/Dashboard/signup.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'Details'],
            filename: 'views/Details/Index.html',
            template: './src/views/Details/Index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'Order'],
            filename: 'views/Order/Index.html',
            template: './src/views/Order/Index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'Register'],
            filename: 'views/Register/Index.html',
            template: './src/views/Register/Index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'Search'],
            filename: 'views/Search/Index.html',
            template: './src/views/Search/Index.html',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['allImport' , 'Shared'],
            filename: 'views/Shared/Index.html',
            template: './src/views/Shared/Index.html',
        }),
    ]
};
