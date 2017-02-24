'use strict';

const PATHS = require('./paths');
const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');
const yargs = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (conf) => {

  const APP_CONFIG = {
    FB_APP_ID: conf.FB_APP_ID || '1616956521945061',
    RND_API_URL: 'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
  };

  return {
    entry: [PATHS.src],
    module: {
      rules: [{
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.jsx?$/,
          use: 'eslint-loader',
          include: [PATHS.src],
          enforce: 'pre'
        },
        {
          test: /.(js|jsx)$/,
          include: [PATHS.src],
          use: 'babel-loader'
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$/,
          use: 'file-loader?name=/images/[name].[hash].[ext]'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[hash].[ext]'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?name=/fonts/[name].[hash].[ext]'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
      modules: [PATHS.src, PATHS.node_modules]
    },
    externals: {
      'APP_CONFIG': JSON.stringify(APP_CONFIG)
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: 'node_modules/html-webpack-template/index.ejs',
        inject: false,
        env: process.env,
        appMountId: 'app',
        favicon: './favicon.ico'
      })
    ]
  }
}