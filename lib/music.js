const fetch = require('node-fetch')
const FormData = require('form-data')
const cheerio = require('cheerio')

async function musicalDown(url) {
  return new Promise(async (resolve, reject) => {
    const baseUrl = 'https://musicaldown.com'
    const optionsGet = {
      method: 'GET',
      headers: {
        'cookie': '_ga=GA1.2.688739287.1629705556; session_data=9870dd1869284d4b242c75054922ca80; _gid=GA1.2.879595532.1630422474; _gat_gtag_UA_197840056_1=1; __gads=ID=4762a0dcb9efc7df-224881c43bcb0053:T=1629705557:RT=1630422562:S=ALNI_MbtviOkS9FNAff0DmsmPc0mMGs08w',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      }
    }
    const getHtml = await fetch(baseUrl, optionsGet).then(response => response.text())
    const $ = cheerio.load(getHtml)
    const action = $('form').attr('action')
    const urlName = $('form > div > div > input').eq(0).attr('name')
    const tokenName = $('form > div > div > input').eq(1).attr('name')
    const tokenValue = $('form > div > div > input').eq(1).attr('value')
    const bodyForm = new FormData()
    bodyForm.append(urlName, url)
    bodyForm.append(tokenName, tokenValue)
    bodyForm.append('verify', 1)
    const optionPost = {
      method: 'POST',
      body: bodyForm,
      headers: {
        'cookie': '_ga=GA1.2.688739287.1629705556; session_data=9870dd1869284d4b242c75054922ca80; _gid=GA1.2.879595532.1630422474; _gat_gtag_UA_197840056_1=1; __gads=ID=4762a0dcb9efc7df-224881c43bcb0053:T=1629705557:RT=1630422562:S=ALNI_MbtviOkS9FNAff0DmsmPc0mMGs08w',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      }
    }
    const getHtml2 = await fetch(baseUrl + action, optionPost).then(response => response.text())
    const $$ = cheerio.load(getHtml2)
    const action2 = $$('form').attr('action')
    const optionGet2 = {
      method: 'POST',
      headers: {
        'cookie': '_ga=GA1.2.688739287.1629705556; session_data=9870dd1869284d4b242c75054922ca80; _gid=GA1.2.879595532.1630422474; _gat_gtag_UA_197840056_1=1; __gads=ID=4762a0dcb9efc7df-224881c43bcb0053:T=1629705557:RT=1630422562:S=ALNI_MbtviOkS9FNAff0DmsmPc0mMGs08w',
        'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
      }
    }
    const getHtml3 = await fetch(baseUrl + action2, optionGet2).then(response => response.text())
    const $$$ = cheerio.load(getHtml3)
    resolve({
      status: true,
      result: {
        thumb: $$('.welcome.section > .container > .row > .col.s12.l4 > img').attr('src'),
        mp4: {
          server_1: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(0).attr('href'),
          server_2: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(1).attr('href'),
          direct_link: $$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(2).attr('href'),
          qr: $$('.welcome.section > .container > .row > .col.s12.l8 > p > img').attr('src')
        },
        mp3: {
          preview: $$$('.welcome.section > .container > .row > .col.s12.l4 > audio > source').attr('src'),
          server_1: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(0).attr('href'),
          server_2: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(1).attr('href'),
          direct_link: $$$('.welcome.section > .container > .row > .col.s12.l8 > a').eq(2).attr('href'),
          qr: $$$('.welcome.section > .container > .row > .col.s12.l8 > p > img').attr('src')
        }
      }
    })
  })
}

module.exports = { musicalDown }