const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin  = require("./plugins/test-plugin")

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
        loader: "./loaders/clean-log-loader",
      },
      // {
      //   test: /\.js$/,
      //   loader: "./loaders/banner-loader",
      //   options: {
      //     author: "michela",
      //     description: "amazing loader",
      //   },
      // },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader",
        type: "javascript/auto", // 阻止webpack默认处理图片资源，只使用file-loader处理
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: ["./loaders/style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new TestPlugin()
  ],
  mode: "development",
};
