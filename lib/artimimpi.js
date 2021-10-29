const axios = require('axios')
const cheerio = require('cheerio')

async function ArtiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const detect = $('#body > font > i').text()
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true
        if (isAva) {
          const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
          const res = {
            status: 200,
            result: isi
          }
          resolve(res)
        } else {
          const res = {
            status: 404,
            result: `Arti Mimpi ${mimpi} Tidak Di Temukan`
          }
          resolve(res)
        }
      })
      .catch(reject)
  })
}

async function dddTik(url) {
  return new Promise((resolve, reject) => {
    axios.post('https://dddtik.com/down.php',
    qs.stringify({
      'url': url
    }),
    {
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      resolve({
        status: true,
        title: $('div > div > span').text(),
        thumb: $('div > img').attr('src'),
        download: {
          server_1: $('div > div > a#download-btn').eq(1).attr('href'),
          server_2: $('div > div > a#download-btn').eq(2).attr('href')
        }
      })
    })
    .catch(reject)
  })
}

module.exports = ArtiMimpi
module.exports = dddTik
