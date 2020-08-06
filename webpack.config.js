const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const javascriptRules = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const imagesRules = {
  test: /\.(png|svg|jpg|gif)$/,
  use: ['file-loader'],
};

module.exports = {
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [cssRules, imagesRules, javascriptRules],
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
