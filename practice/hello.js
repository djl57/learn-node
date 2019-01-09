let hello = () => {
  console.log('hello a !')
}

let sum = (a, b) => {
  console.log(a + b)
}

let greet = () => {
  console.log('我是moudle.exports出来的')
}

// module.exports = greet;

// 这是一种错误的写法，不能这么进行赋值
// exports = {
//   hello: hello,
//   sum: sum
// }

// 只能使用这种方式进行方法暴露
exports.hello = hello
exports.sum = sum