// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test:/\.(png|jpe?g|gif|webp)$/,
        type:"asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10000 * 1024 //小于10kb的图片会被base64处理
          }
        }
      }
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};
