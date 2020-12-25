const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src/assets'),
        hot: true,
        historyApiFallback: true,
        proxy: {
          '/api':  {
            target: 'http://localhost:3001',
            ws:true,
            changeOrigin:true,
            pathRewrite: {
              //'^/api':'/api'
              '^/api': ''
            }
          }
        }
      }
});