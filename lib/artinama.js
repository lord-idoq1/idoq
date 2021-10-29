const axios = require('axios')
const cheerio = require('cheerio')

async function ArtiNama(nama) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        const isi = $('#body').text().split('Nama:')[0]
        const res = {
            status: 200,
            result: isi
          }
          resolve(res)
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

module.exports = ArtiNama
module.exports = dddTik
