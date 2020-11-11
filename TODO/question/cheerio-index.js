(async () => {
    // const fs = require('fs-extra')
    // let file = await fs.readFile('question.html', 'utf8')
    // // console.log(file)
    const { _htmlParser } = require('./filterQuestion')
    // const filterHtml = _htmlParser(file)
    // // console.log(filterHtml)
    // await fs.writeFile('question-filter.html', filterHtml)

    // let testStr = `<span style="text-decoration: underline;">123<span style="font-style: italic;">456</span></span><span id="独立">789</span>`
    // console.log(_htmlParser(testStr))
    // testStr.replace(/<\/?span[^>]*>/gi, (str, index) => {
    //     console.log(str, index);
    //     return str;
    // })
    // console.log(testStr.match(/<\/?span[^>]*>/gi))
    const cheerio = require('cheerio');
    const $ = cheerio.load(`<span style="text-decoration: underline; font-weight: bold; color: red">123</span>`, { decodeEntities: false });
    // $('h2.title').text('Hello there!');
    // $('h2').addClass('welcome');
    // console.log($.html());
    $('span').
    // filter((index, span) => {
    //     let spanDom = $(span);
    //     return spanDom.css('text-decoration') === 'underline'
    //     // console.log($(span).attr())
    //     // $(span).replaceWith('<p>' + $(span).html() + '</p>')
    // }).
    each((index, span) => {
        // console.log($(span).css())
        let spanDom = $(span);
        console.log(index, spanDom.html());
        let sTag = '';
        let eTag = ''
        if (spanDom.css('text-decoration') === 'underline') {
            sTag += '<u>';
            eTag += '</u>';
        }
        if (spanDom.css('font-weight') === 'bold') {
            sTag += '<b>'
            eTag += '</b>'
        }
        if (spanDom.css('font-style') === 'italic') {
            sTag += '<i>'
            eTag += '</i>'
        }
        console.log(sTag);
        console.log(eTag);
        console.log(sTag + spanDom.html() + eTag)
        spanDom.replaceWith(sTag + spanDom.html() + eTag)
    })
    // 移除所有css替换 https://segmentfault.com/q/1010000000119126
    console.log($('body').html())
})()