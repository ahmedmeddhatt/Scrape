const axios = require('axios');
const cheerio = require('cheerio');
// const puppeteer = require('puppeteer');
// const {fun} = require('./puppeteer')
// const x = require('./puppeteer')
// console.log(x);


let table = [
    {
        baseUrl : "https://www.albawabhnews.com",
        tailUrl : "search/term",
        params : {
            pageSelectorKey : "page",
            pageSelectorValue : 1,
            searchKey: "w",
            searchValue : "الصادرات+الزراعية"
        },
        pageLimit : "100"
    },

]
const y =`${table[0].baseUrl}/${table[0].tailUrl}?${table[0].params.pageSelectorKey}=${table[0].params.pageSelectorValue}&${table[0].params.searchKey}=${table[0].params.searchValue}`
// var res = encodeURI(y)
// console.log(res);
// let arrlinks = [];
let finalArray = [];
async function test1() {

    for ( i = 1; i < 2; i++) {
        var r = encodeURI(y)
       const x = axios.get(r).then((res) => {
        //    console.log(r);
            // await fun()
            let arr=[]
            const $ = cheerio.load(res.data);
            //  fun()
            $('.item-card').each((index, element) => {
                const link = ($(element).children().attr('href'));
                //  const title = ($(element).children().find('h3').text());
                //  const date = ($(element).children().find('.time').text());
                //  const desc = ($(element).children().find('p').text());
                //  const d = ($(element).find('time').html());
                //  const img = ($(element).children().find('img').attr('data-src'));
                //  console.log( link);
                arr.push('https://www.albawabhnews.com/'+ link)
            })
// console.log(arr);
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
                         const firstImg = ($(element).children().find('img').attr('srcset'));
                         if(firstImg){
                             const secondImg = firstImg.split(',\n')
                             const realImg = secondImg[1].split(' ')
                            //  console.log(real);
                            //  console.log('https://www.albawabhnews.com' + realImg[4]);
                            // console.log(img);
                             img = 'https://www.albawabhnews.com' + realImg[4]

                         
                        const title = ($(element).find('h1').text());
                        const desc = ($(element).find('p').text());
                        const source = 'https://www.albawabhnews.com/search/term?w=%D8%A7%D9%84%D8%B5%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9'
                        // console.log(img);
                        if(title.length > 0 && desc.length > 0)   finalArray.push({title,source,desc, img})
                         }
                        console.log(finalArray);
                    })
                    // console.log(finalArray.length)
                })
        
            })


        });
    }

}


test1()

// test1().then((arr) => {
//     console.log(222, arr)
//     arr.push(1)
//     arr.forEach((el) => {
//         console.log(1111, arrlinks)
//         axios.get(el).then((res) => {

//             const $ = cheerio.load(res.data);
//             $('.cont').each((index, element) => {
//                 // const link = ($(element).children().attr('href'));
//                 //  const title = ($(element).children().find('h3').text());
//                 //  const date = ($(element).children().find('.time').text());
//                 //  const desc = ($(element).children().find('p').text());
//                 //  const d = ($(element).find('time').html());
//                 //  const img = ($(element).children().find('img').attr('data-src'));
//                 //  console.log(link);
//                 const title = ($(element).find('h1').text());
//                 const desc = ($(element).find('p').text());
//                 console.log(desc);
//                 finalArray.push({ title, desc })
//             })
//             console.log(finalArray)
//         })

//     })

// })




// console.log(arrlinks);