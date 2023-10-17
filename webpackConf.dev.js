const { merge } = require("webpack-merge");
const baseConfig = require("./webpackConf.base.js");
const path = require("path");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, "./dist"),
    compress: true,
    port: 3000,
  },
});
