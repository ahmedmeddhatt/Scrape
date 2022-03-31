const puppeteer = require('puppeteer');
exports.fun = async () => {


    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.albawabhnews.com/search/term?w=%D8%A7%D9%84%D8%B5%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9');
    // await page.screenshot({path : 'page.png'})
    const imgUrl = await 
    page.$eval('.img-cont img', ( img => img.src))
        // page.$$eval('.img-cont img',imgAll =>{ return imgAll.map( img => img.src)})

    // const img = ('https://www.albawabhnews.com/'+imgUrl.trim())
    await browser.close();

    console.log(imgUrl);
}

