const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
};