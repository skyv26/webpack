const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[contenthash][ext][query]',
  },
  plugins: [new CleanWebpackPlugin()],
});