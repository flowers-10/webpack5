module.exports = function (content, map, meta) {
  // content 源文件的内容
  // map SourceMap 数据
  // meta 数据，可以是任何内容
  const callback = this.async();

  setTimeout(() => {
    console.log("test2");
    callback(null, content, map, meta);
  }, 1000);
};
