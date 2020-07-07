console.log('start')
// process.nextTick(function foo() {
//   console.log('nextTick')
//   process.nextTick(foo)
// })
setImmediate(function foo() {
  // console.log('setImmediate')
  setImmediate(foo)
})

setInterval(() => {
  console.log('end')
}, 1000)
// 事实上，现在要是你写出递归的process.nextTick，Node.js会抛出一个警告，要求你改成setImmediate

// setImmediate(function () {
//   setImmediate(function A() {
//     console.log(1)
//     setImmediate(function B() {
//       console.log(2)
//     })
//   })

//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED')
//   }, 0)
// })
