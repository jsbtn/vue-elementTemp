const webpack = require("webpack");
module.exports = {
  publicPath: './',
  devServer: {
    port: 8080,
    open: true,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://172.17.0.193",
        changOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  // 配置es6 兼容
  chainWebpack: config => {
    config.entry("main").add("babel-polyfill"); // main是入口js文件
  }
};