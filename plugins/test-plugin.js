/*
  1. webpack加载webpack.config.js中所有配置，此时就会new TestPlugin(), 执行插件的constructor
  2. webpack创建compiler对象
  3. 遍历所有plugins中插件，调用插件的apply方法
  4. 执行剩下编译流程（触发各个hooks事件）
*/
class TestPlugin {
  constructor() {
    console.log("TestPlugin constructor()");
  }
  // 1. webpack读取配置时，new TestPlugin() ，会执行插件 constructor 方法
  // 2. webpack创建 compiler 对象
  // 3. 遍历所有插件，调用插件的 apply 方法
  apply(compiler) {
    console.log("TestPlugin apply()");
  }
}

module.exports = TestPlugin;