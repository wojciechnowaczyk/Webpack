const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/kiwi.js",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    historyApiFallback: {
      index: "/kiwi.html",
    },
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      title: "Kiwi",
      description: "Kiwi",
      template: "src/page-template.hbs",
    }),
    new ModuleFederationPlugin({
      name: "KiwiApp",
      filename: "remoteEntry.js",
      exposes: {
        "./KiwiPage": "./src/components/kiwi-page/kiwi-page.js",
      },
    }),
  ],
};
