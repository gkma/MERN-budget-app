// provides utilities for working with file and directory paths
const path = require('path');

// generates HTML5 file that includes all webpack bundles in body > script tag
const HTMLWebpack = require('html-webpack-plugin');
const HTMLWebpackPlugin = new HTMLWebpack({
  template: './src/index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [HTMLWebpackPlugin]
};
