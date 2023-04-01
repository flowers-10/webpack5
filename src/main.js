import count from "./js/count";
import sum from "./js/sum";
// 引入 Css 资源，Webpack才会对其打包
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./styl/index.styl";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
// var result1 = count(2, 1);
// console.log(result1);
// var result2 = sum(1, 2, 3, 4);
// console.log(result2);
