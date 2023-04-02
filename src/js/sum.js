export default function sum(...args) {
  // 假设错误
  return args.reduce((p, c) => p + c, 0)();
}
