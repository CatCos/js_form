const path = require('path');
const webpack = require('webpack');
const ENV = require('./env');

var TransferWebpackPlugin = require('transfer-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname,  '..', 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|gif|jpg|png|ico|ttf|txt)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.join(__dirname, '..', 'node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: '../index.html',
        publicPath: '/',
        //favicon: 'app/assets/favicons/favicon.ico',
        inject: true
      }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify(ENV)
    }),
    new TransferWebpackPlugin([
    { from: path.join(__dirname, '..', 'src', 'assets'), to: './assets' }
  ])
  ]
};
