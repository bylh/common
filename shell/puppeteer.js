(async () => {
    const puppeteer = require('puppeteer')
    const browserConfig = {
        headless: false,
        args: [
            '–disable-gpu',
            '–disable-dev-shm-usage',
            '–disable-setuid-sandbox',
            '–no-first-run',
            '–no-sandbox',
            '–no-zygote',
            '–single-process'
        ]
    }
    let browser
    try {
        // 如果browser实体不存在，则创建browser实体
        if (!browser) {
            browser = await puppeteer.launch(browserConfig)
        }

        // 创建页面
        const page = await browser.newPage()

        let cookies = null

        // 打开登陆页面
        await page.goto('https://wemappre.sparta.html5.qq.com/account')
        while (true) {
            // 等待跳转的页面加载完成
            await page.waitForNavigation({ waitUntil: ['load'] })
            console.log('test111')
            if (page.url().indexOf('wemappre.sparta.html5.qq.com') !== -1) {
                cookies = await page.cookies()
                console.log('cookies: ', cookies)
                break
            }
        }

        browser.close()
        browser = null
    } catch (err) {
        browser && browser.close()
        browser = null
        console.log('获取cookie失败！', err)
    }
})()