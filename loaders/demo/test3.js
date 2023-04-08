module.exports = function (content) {
  console.log(content);
  // content是一个Buffer数据
  // buffer处理图片或者图标等二进制文件
  return content;
};
module.exports.raw = true; // 开启 Raw Loader