const axios = require('axios');
const cheerio = require('cheerio');
let arr = [];

async function ht (){
     for ( i=1; i<3 ; i++){
       await axios.get(`https://www.albawabhnews.com/4521761`).then((res) => {
    
         const $ = cheerio.load(res.data);
        $('.cont').each((index , element) => {
            // const link = ($(element).children().attr('href'));
            // const pribce = ($(element).children().find('.cat-name').text());
            // const date = ($(element).children().find('.time').text());
            // const desc = ($(element).children().find('p').text());
            const title = ($(element).find('h1').text());
            const desc = ($(element).find('p').text());
            // const img = ($(element).find('.main-img > img').first().attr('srcset'));
            // const image = img.replace(/\s+/g, ' ').trim()
            // const img = ($(element).children().find('img').attr('src'));
    
    
    
    console.log(title);
            arr[index]=( title , desc )
        })
    
        
        
        // console.log(arr);
        
        });
    }
} 

     
ht()

