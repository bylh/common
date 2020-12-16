/*************** b.js**********************/
// const { count, add } = require('./a.js')
//在支持es6模块的环境下等同于
import {count, add} from './a.js'
// import c from './c.js'
// console.log(c)
console.log(count) //0
add();
console.log(count) // 0