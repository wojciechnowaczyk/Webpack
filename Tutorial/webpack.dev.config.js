const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    dog: "./src/dog.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, //3 kilobytes
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
            plugins: ["@babel/plugin-proposal-class-properties"],
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", //cleans dist folder
        path.join(process.cwd(), "build/**/*"), //cleans other folders than dist
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      chunks: ["hello-world"],
      title: "Hello world",
      template: "src/page-template.hbs",
      description: "Description",
    }),
    new HtmlWebpackPlugin({
      filename: "dog.html",
      chunks: ["dog"],
      title: "Dog",
      template: "src/page-template.hbs",
      description: "Description",
    }),
  ],
};
