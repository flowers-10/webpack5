const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      // {
      //     test:/\.js$/,
      //     loader:"./loaders/test-loader.js"
      // },
      {
        test: /\.js$/,
        // use:[
        //   "./loaders/demo/test4.js",
        //   "./loaders/demo/test5.js",
        //   "./loaders/demo/test6.js",
        // ]
        // loader:"./loaders/demo/test3.js"
        loader: "./loaders/clean-log-loader.js",
      },
      {
        test: /\.js$/,
        loader:"./loaders/banner-loader",
        options: {
          author:"michela",
          description:"amazing loader"
        }
      },
      {
        test: /\.js$/,
        loader:"./loaders/babel-loader",
        options: {
          presets:["@babel/preset-env"]
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader.js",
        type: "javascript/auto", // 解决图片重复打包问题
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
};
