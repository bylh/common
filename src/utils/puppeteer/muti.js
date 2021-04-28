const puppeteer = require('puppeteer');

(async () => {
    for (let i = 0; i < 5; i++) {
        try {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto('https://sale.benqi.fi');
        } catch (err) {
            console.error(err)
        }
    }
    //   await page.screenshot({ path: 'example.png' });

    //   await browser.close();
})();