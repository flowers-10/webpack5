class AnalyzeWebpackPlguin {
    apply(compiler) {
      // emit是异步串行钩子
      compiler.hooks.emit.tap("AnalyzeWebpackPlguin", (compilation) => {
        const assets = Object.entries(compilation.assets);
  
        let source = "# 分析打包资源大小 \n| 名称 ｜ 大小 ｜\n| --- | --- |";
  
        assets.forEach(([fileName, file]) => {
          source += `\n| ${fileName} | ${file.size()} 字节|`;
        });
  
        // 添加资源
        compilation.assets["analyze.md"] = {
          source() {
            return source;
          },
          size() {
            return source.length;
          },
        };
      });
    }
  }
  
  
  module.exports = AnalyzeWebpackPlguin