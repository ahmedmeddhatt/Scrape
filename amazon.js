const puppeteer = require('puppeteer');

 (async () => {

    const browser = await puppeteer.launch({
        headless: false , defaultViewport: false 
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/s?k=playstation+consoles&rh=n%3A294915&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=HWAQ5VG84T1PZGTZZ36D&pf_rd_s=merchandised-search-5&pf_rd_t=101&ref=nb_sb_noss');
    
    const allPage = await 
    page.$$('div.sg-row') 
    for(const item of allPage){
        const   title = await 
        page.evaluate(el => el.querySelector('h2 > a > span').textContent, item)

        console.log(title);
    }
    await browser.close();
})()