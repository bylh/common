(async () => {
    const fs = require('fs-extra')
    let file = await fs.readFile('question.html', 'utf8')
    console.log(file)
    const { _htmlParser } = require('./filterQuestion')
    const filterHtml = _htmlParser(file)
    console.log(filterHtml)
    await fs.writeFile('question-filter.html', filterHtml)
})()