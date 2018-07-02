const webpack = require('webpack');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';

var plugins = [];
if (isProduction) {
    plugins.push(
        /**
         * IgnorePlugin will skip any require
         * that matches the following regex.
         */
        new webpack.IgnorePlugin(/fs/)
    );
}

module.exports = {
  mode: 'development',
  entry: './pages/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }, 
  node: {
    fs: 'empty', 
    child_process: 'empty',
  }
};