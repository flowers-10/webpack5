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
          test:/\.js$/,
          use:[
            "./loaders/demo/test4.js",
            "./loaders/demo/test5.js",
            "./loaders/demo/test6.js",
          ]
            // loader:"./loaders/demo/test3.js"

        }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  mode: "development",
};
