(async () => {
    const puppeteer = require('puppeteer');
    try {
        const browser = await puppeteer.launch({
            headless: true,
            // ['--no-sandbox', '--disable-setuid-sandbox']
            args: ['--no-sandbox']
        });
    } catch(err) {
        console.log(err)
    }
})()