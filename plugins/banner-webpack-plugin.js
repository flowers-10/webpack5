class BannerWebpackPlugin {
    constructor(options = {}) {
      this.options = options;
    }
  
    apply(compiler) {
      // 需要处理文件
      const extensions = ["js", "css"];
  
      // emit是异步串行钩子
      compiler.hooks.emit.tapAsync("BannerWebpackPlugin", (compilation, callback) => {
        // compilation.assets包含所有即将输出的资源
        // 通过过滤只保留需要处理的文件
        const assetPaths = Object.keys(compilation.assets).filter((path) => {
          const splitted = path.split(".");
          return extensions.includes(splitted[splitted.length - 1]);
        });
  
        assetPaths.forEach((assetPath) => {
          const asset = compilation.assets[assetPath];
  
          const source = `/*
  * Author: ${this.options.author}
  */\n${asset.source()}`;
  
          // 覆盖资源
          compilation.assets[assetPath] = {
            // 资源内容
            source() {
              return source;
            },
            // 资源大小
            size() {
              return source.length;
            },
          };
        });
  
        callback();
      });
    }
  }
  
  module.exports = BannerWebpackPlugin;