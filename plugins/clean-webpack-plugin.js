class CleanWebpackPlugin {
  apply(compiler) {
    // 获取操作文件的对象
    const fs = compiler.outputFileSystem;
    // emit是异步串行钩子
    compiler.hooks.emit.tapAsync(
      "CleanWebpackPlugin",
      (compliation, callback) => {
        // 获取输出文件目录
        const outputPath = compiler.options.output.path;
        // 删除目录所有文件
        const err = this.removeFiles(fs, outputPath);
        // 执行成功 err 为 undefined, 执行失败 err 就是失败的原因
        callback(err);
      }
    );
  }

  removeFiles(fs, path) {
    try {
      // 读取当前目录下的所有文件
      const files = fs.readdirSync(path);

      // 遍历文件删除
      files.forEach((file) => {
        // 获取文件完整路径
        const filePath = `${path}/${file}`;
        // 分析文件
        const fileStat = fs.statSync(filePath);
        // 判断是否是文件夹
        if (fileStat.isDirectory()) {
          // 是文件夹需要递归遍历删除所有子文件
          this.removeFiles(fs, filePath);
        } else {
          // 不是文件夹就直接删除
          fs.unlinkSync(filePath);
        }
      });

      // 最后删除当前目录
      fs.rmdirSync(path);
    } catch (e) {
      // 捕获错误并返回
      return e;
    }
  }
}

module.exports = CleanWebpackPlugin;
