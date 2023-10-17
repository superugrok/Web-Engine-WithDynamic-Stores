const { merge } = require("webpack-merge");
const baseConfig = require("./webpackConf.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const prodConfig = {
  mode: "production",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".json",
      ".ts",
      ".tsx",
      ".css",
      ".scss",
      "png",
      "jpg",
      "cur",
    ],
  },
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
        test: /\.(jpg|png|svg|gif|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      },
    ],
  },
  plugins: [
    // removes css comments
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
  },
};

// webpack merge has some troubled with merge arrays
const resultConfig = merge(baseConfig, prodConfig);
resultConfig.module.rules = prodConfig.module.rules;

// console.log('merged', resultConfig);

module.exports = resultConfig;
