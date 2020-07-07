let p = new Promise((resolve) => {
  resolve(10)
})

setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    p.then((v) => console.log(v))
  }
})

setTimeout(() => {
    console.log('hahh')
})

// 在node 8.9.4上面执行两个setTimeout的顺序是无法保证的