(async () => {
    let data = await fetch('https://baidu.com', {
        mode: 'no-cors'
    })
    console.log('data:::', data)
})()