(async () => {
    const fs = require('fs-extra')
    const axios = require('axios')
    let file = await fs.readFile('question.html', 'utf8')
    // console.log(file)
    const { _htmlParser } = require('./filterQuestion')
    const { _htmlFilter } = require('./filter-cheerio')
    const filterHtml = _htmlFilter(file)
    // console.log(filterHtml)
    await fs.writeFile('question-filter.html', filterHtml)

    // let testStr = `开始<span style="text-decoration: underline; font-weight: bold; color: red">123&nbsp&nbsp<span style="font-style: italic;">456</span></span><span id="789">789</span><span id="test1" style="text-decoration: underline">000<span style="font-weight: bold; font-style: italic">888<div>测试div</div></span></span>`
    let testStr = `123`;
    console.log(_htmlFilter(testStr));

    const imgData = await axios({
        url: encodeURI 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1449142973,3696303178&fm=173&app=49&f=JPEG?w=312&h=208&s=2CB16894458E8D4D30BBAB910300F08E',
        responseType: 'stream'
    })
    console.log('imgData', imgData.data);
})()