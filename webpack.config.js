const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../todo'),
    },
    compress: true,
    port: 5000,
  },
};