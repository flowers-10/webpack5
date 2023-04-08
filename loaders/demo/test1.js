module.exports = function (content, map, meta) {
  console.log("test1");
  // content 源文件的内容
  // map SourceMap 数据
  // meta 数据，可以是任何内容
  // 传递map，让source-map不中断
  // 传递meta，让下一个loader接收到其他参数
  this.callback(null, content, map, meta);
  return; // 当调用 callback() 函数时，总是返回 undefined
};
