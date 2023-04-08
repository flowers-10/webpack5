module.exports = function(content) {
  // 清除文件中的console.log
  return content.replace(/console\.log\(.*\);?/g,"")
}