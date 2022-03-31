const axios = require('axios');
const cheerio = require('cheerio');
// const puppeteer = require('puppeteer');



let table = [
    {
        baseUrl : "https://www.agrinewz.com",
        tailUrl : "category",
        params : {
            pageSelectorKey : "page",
            pageSelectorValue : 1,
            searchKey: "w",
            searchValue : "الأجندة-الزراعية"
        },
        pageLimit : "100"
    },

]
const y =`${table[0].baseUrl}/${table[0].tailUrl}/${table[0].params.searchValue}/${table[0].params.pageSelectorKey}/${table[0].params.pageSelectorValue}`
// var res = encodeURI(y)
// console.log(res);
// let arrlinks = [];
let finalArray = [];
async function test1() {

    for ( i = 1; i < 2; i++) {
        var r = encodeURI(y)
       const x = axios.get(r).then((res) => {
           console.log(r);
            
            let arr=[]
            const $ = cheerio.load(res.data);
            $('.item-list').each((index, element) => {
                // const link = ($(element).children().last().attr('href'));
                const link = ($(element).find('h2.post-box-title a').attr('href'));
                //  const title = ($(element).children().find('h3').text());
                //  const date = ($(element).children().find('.time').text());
                //  const desc = ($(element).children().find('p').text());
                //  const d = ($(element).find('time').html());
                //  const img = ($(element).children().find('img').attr('data-src'));
                 console.log( link);
                arr.push('https://www.albawabhnews.com/'+ link)
            })

           return arr

        }).then((arr)=>{
            arr.forEach((el) => {
                // console.log(1111, arrlinks)
                axios.get(el).then((res) => {
        
                    const $ = cheerio.load(res.data);
                    $('.cont').each((index, element) => {
                        // const link = ($(element).children().attr('href'));
                        //  const title = ($(element).children().find('h3').text());
                        //  const date = ($(element).children().find('.time').text());
                        //  const desc = ($(element).children().find('p').text());
                        //  const d = ($(element).find('time').html());
                        const img = ($(element).children().find('img').attr('data-src'));
                        //  console.log(img);
                        const title = ($(element).find('h2.post-box-title a').text());
                        // console.log(title);
                        const desc = ($(element).find('p').text());
                        const source = 'https://www.albawabhnews.com/search/term?w=%D8%A7%D9%84%D8%B5%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9'
                        if(title.length > 0 && desc.length > 0)   finalArray.push({ title, desc , source})
                        // console.log(finalArray);
                    })
                    // console.log(finalArray.length)
                })
        
            })


        });
    }

}

test1()

