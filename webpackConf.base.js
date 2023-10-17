const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const screensList = fs.readdirSync("./src/screens/").map((file) => `"${file}"`);

module.exports = {
  entry: "./src/index.tsx", // точка входа
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader", // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[name]",
              },
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      screensList,
      "@App": path.resolve(__dirname, "src/app"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Images": path.resolve(__dirname, "src/assets/images"),
      "@Types": path.resolve(__dirname, "src/types"),
      "@Components": path.resolve(__dirname, "src/app/components"),
      "@Screens": path.resolve(__dirname, "src/screens"),
      "@Constants": path.resolve(__dirname, "src/constants"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Models": path.resolve(__dirname, "src/models"),
      "@Styles": path.resolve(__dirname, "src/styles")
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    publicPath: "",
    // assetModuleFilename: 'images/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      screensList,
    }),
  ], // used for hot reloading when developing
};
