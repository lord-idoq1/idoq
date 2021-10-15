__path = process.cwd()
var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
/*       
]=====> LOAD JS <=====[
*/
const { ping } = require('minepm');
const PornHub = require('pornhub.js')
const pornhub = new PornHub()
const Rblx = require("rblx-js")
const screenshot = require('screenshot-desktop')
var Anime = require('anime-scraper').Anime
const bgbdl = require("fbdl-core");
var creator = "idoganz1"
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var zrapi = require("zrapi");
var dotenv = require("dotenv").config()
var fs = require('fs');
var TikTokScraper = require('tiktok-scraper');
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
var router  = express.Router();
var { herolist, herodetail } = require('../lib/heroml')
var { TiktokDownloader } = require('../lib/tiktokdl.js')
var { rexdl, andro1 } = require('../lib/apk')
var artimimpi = require('../lib/artimimpi')
var artinama = require('../lib/artinama')
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');

var { 
        palingmurah_, 
        layarkaca_, 
        Amino_, 
      } = require('./../lib/search.js');
var { 
        Komiku_, 
        AnimePlanet_, 
        KomikFox_, 
        komikstationlist_, 
        KomikStation_, 
        Mangakus_, 
        Kiryuus_, 
        MangaId_, 
        KiryuuL_, 
        KiryuuC_, 
        KissL_, 
        KissM_, 
        KlikS_, 
        KlikML_ 
      } = require('./../lib/manga.js');
var { 
        metroTV_, 
        CNN_, 
        iNewsTV_, 
        Kumparan_, 
        Tribun_, 
        DailyNews_, 
        DetikNews_, 
        Okezone_, 
        CNBC_, 
        KoranFajar_, 
        Kompas_, 
        KoranSindo_, 
        TempoNews_, 
        Indozone_, 
        AntaraNews_, 
        Republika_ 
      } = require('./../lib/news.js');
var {
	Searchnabi,
	Gempa
} = require('./../lib');

var {
	RandomCerpen, 
	emoji,
	stickerSearch, 
	ManggaToon,
	RamalJadian,
	Pantun, 
	trutdare,
	infoFilm123,
	SearchFilm,
	FaktaUnik,
	Liriklagu,
	Otakudesu,
	wikipedia,
	corona,
	cuaca,
	FilmApik23,
	Gempa,
	cnn,
	TiktokDownloader,
	uploadFile,
	ytPlay,
	igDownloader,
	ssstik_io,
	photoManipulation,
	ToVid,
	fbDownloader,
	SpeedVid,
	ReverseVid,
	GSMArena,
	zodiakMing,
	zodiakHar,
	Shoope,
	pinterest,
	TiktokDown
} = require('./../lib2');

var {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly
} = require("./../lib/utils/photooxy");

var {
  igStalk,
  igDownload
} = require("./../lib/utils/ig");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/utils/yt");

var { 
  Joox, 
  FB, 
  Tiktok
} = require("./../lib/utils/downloader");

var {
  Cuaca, 
  Lirik
} = require('./../lib/utils/information');

var {
  Base, 
  WPUser
} = require('./../lib/utils/tools');


var tebakGambar = require('./../lib/utils/tebakGambar');

var cookie = process.env.COOCKIE


/*       
]=====> MESSAGE <=====[
*/
loghandler = {
    notparam: {
        status: false,
        
        code: 406,
        message: 'Masukin apikeynya tod'
    },
    noturl: {
        status: false,
        
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        
        code: 406,
        message: 'masukkan parameter query'
        },
    

    notkata: {
        status: false,
        
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        
        code: 406,
        message: 'masukan parameter value'
    },
    invalidKey: {
        status: false,
        
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    error: {
        status: false,
        
        message: 'emror bruh'
    }
}
/*
Akhir Pesan Error
*/

router.use(favicon(__path + "/views/favicon.ico"));
const listkey = ["yogipwkey","yogipw","hansgay","dappagay","dappauhuy","reyapi"];

router.post("/apikey", async (req, res, next) => {
  const key = req.query.key;
  if(listkey.includes(key)) {
    res.json({
      message: 'apikey sudah terdaftar'
    });
  } else {
    listkey.push(key);
    res.json({
      message: `berhasil mendaftarkan ${key} Kedatabase apikey`
    });
  }
});

// delete apikey

router.delete("/apikey", async(req, res, next) => {
	const key = req.query.delete;
	if(listkey.includes(key)) {
		res.json({
			message: 'apikey tidak ada sebelumnya'
			})
			} else {
	listkey.splice(key, 1)
	res.json({
		message: 'apikey berhasil dihapus' 
});
 }
});

/*       
]=====> FEATURES ROUTES <=====[
*/

router.get('/music/joox', async(req, res, next) => {
  const query = req.query.query;
  
  
  if(!query) return res.json(loghandler.notquery)
  
  Joox(query)
  .then((result) => {
  res.json(result)
    res.json(result)
  });
  
});

router.get('/music/spotify', async(req, res, next) => {
  
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  
  
  fetch(encodeURI(`https://alpin-api-2021.herokuapp.com/api/spotify?apikey=alpin1&q=${query}`))
  .then(response => response.json())
        .then(hasil => {

        var result = hasil.data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/darkweb', async(req, res, next) => {
  
  
  axios.get(encodeURI(`http://backend-ihsandevs.herokuapp.com/api/Dark%20Web%20Links/`))
  .then(response => response.json())
        .then(hasil => {

        var result = data.hasil;
             res.json({
                 status : true,
                 result
             })
         })
})

router.get('/download/ytmp3', async(req, res, next) => {
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  
  
  ytDonlodMp3(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        
        result
      })
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    });
    
});

router.get('/download/ytmp4', async(req, res, next) => {
  const url = req.query.url;
  

  if(!url) return res.json(loghandler.noturl)
  
  
  ytDonlodMp4(url)
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    
});


router.get("/yt/playmp3", async(req, res, next) => {
    const query = req.query.query;
    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get("/yt/playmp3tes", async (req, res, next) => {
    const query = req.query.query;
    
    
    if(!query) return res.json(loghandler.notquery)
    

    ytPlayMp3(query)
        .then(async (result) => {
const tes = result.url
data = await fetch(tes).then(v => v.buffer())
await fs.writeFileSync(__path +'/tmp/tod.mp3', data)
res.sendFile(__path +'/tmp/tod.mp3')
        })
        .catch((error) => {
            res.json(error);
        });
      
});

router.get("/yt/playmp4", async(req, res, next) => {

    const query = req.query.query;

    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});


router.get('/yt/search', async(req, res, next) => {
    const query = req.query.query;
    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    ytSearch(query)
        .then((result) => {
            res.json({
              status: true,
              code: 200,
              
              result
            })
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get('/download/fb', async (req, res, next) => {
    
        url = req.query.url

	
     if (!url) return res.json(loghandler.noturl)
     fbDownloader(url)
     .then((data) => {
     	var result = data.result;
       res.json(result)
     })
    
})
router.get('/tiktok', async (req, res, next) => {        
            url = req.query.url
	
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
       TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
             	author: 'Idoganz',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/download/ig', async(req, res, next) => {
  const url = req.query.url;
  
  if(!url) return res.json(loghandler.noturl)
  
  
  igDownloader(url)
    .then((data) => {
      result = {
        status: true,
        code: 200,
        
        id: data.id,
        shortCode: data.shortCode,
        caption: data.caption,
        result: data.url
      }
      res.json(result)
    })
    .catch((err) => {
      res.json(err);
    });
    
});



router.get('/stalk/tiktok', async (req, res, next) => {
    
        username = req.query.username

	
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
   
})

router.get('/stalk/github', async(req, res, next) => {
  const username = req.query.username;
  
  if(!username) return res.json(loghandler.notusername)
  
  
  fetch(encodeURI(`https://api.github.com/users/${username}`))
        .then(response => response.json())
        .then(data => {
    	var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
      });
    })
    .catch((err) => {
      res.json(err);
    });
    
});


router.get('/stalk/npm', async (req, res, next) => {

            query = req.query.query
            
	
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/random/quotes', async (req, res, next) => {
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/jadwal-bioskop', async(req, res, next) => {




const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.json({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})

})

router.get('/short/tinyurl', async (req, res, next) => {
    
        url = req.query.url

	
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : `${body}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
   
})
router.get('/short/isgd', async (req, res, next) => {
url = req.query.url
     if (!url) return res.json(loghandler.noturl)

     request(`https://is.gd/create.php?format=simple&url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})
router.get('/short/cuttly', async (req, res, next) => {
url = req.query.url
     if (!url) return res.json(loghandler.noturl)

     shorten = await fetch(`https://cutt.ly/api/api.php?short=${url}&key=4367a5227ec3b074cc1445a23d9355619afc5`)
     body = await shorten.json()
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body.url.shortLink}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
})
router.get('/styletext', async (req, res, next) => {
	var teksnya = req.query.text;
	 if(!teksnya) return res.json({ info: 'masukkan param text'})
     var { JSDOM } = require('jsdom')
     
let respi = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(teksnya))
    let html = await respi.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    res.json(obj)
    })
router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode;
		
		
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
	
});

router.get('/tools/wpuser', async(req, res, next) => {
  const link = req.query.url;
  
  
  if(!link) return res.json(loghandler.noturl)
  
  
  
    WPUser(link)
    .then((data) => {
      res.json(data)
    })
    
});

router.get('/info/cuaca', async(req, res, next) => {
  
  const kota = req.query.kota;
  
  
  if(!kota) return res.json({status: false, code: 406, message: 'masukkan parameter kota'})
  
    Cuaca(kota)
    .then((data) => {
      res.json(data)
    })
  
})
router.get('/info/gempa', async (req, res, next) => {
	        

		
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi;
		

		
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
	
})


router.get('/muslim/hadits', async (req, res, next) => {

            kitab = req.query.kitab,
            nomor = req.query.nomor
	
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
             res.json(
             data
             )
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/quran', async (req, res, next) => {

            surah = req.query.surah,
            ayat = req.query.ayat
            
	
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/muslim/tahlil', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/wirid', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/ayatkursi', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/doaharian', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/niatshalat', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/kisahnabi', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        

	

	asmaul = JSON.parse(fs.readFileSync(__path +'/data/AsmaulHusna.json'));
	res.json(asmaul)

})


router.get('/muslim/niatshubuh', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/niatisya', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/muslim/niatashar', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/muslim/jadwalshalat', async (req, res, next) => {

            kota = req.query.kota
            
	
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get("/search/palingmurah", async(req, res, next) => {

    const query = req.query.query;

    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    palingmurah_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get("/search/layarkaca", async(req, res, next) => {

    const query = req.query.query;

    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    layarkaca_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get("/search/amino", async(req, res, next) => {

    const query = req.query.query;

    
    
    if(!query) return res.json(loghandler.notquery)
    
    
    Amino_(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
      
});
router.get('/search/image', async(req, res, next) => {
  
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  
  
  
    try {
        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${query}`,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              
              result: hasil
            })
        })
    } catch (e) {}
  
})
router.get('/search/gplaystore', async (req, res, next) => {
    
     query = req.query.query
     num = req.query.num
     if (!query) return res.json(loghandler.notquery)
    if (!num) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter num"})
     fetch(encodeURI(`https://gatauajg.yogipw.repl.co/api/search/gplaystore?query=${query}&num=${num}`))
    .then(response => response.json())
     .then((data) => {
     var result = data;
       res.json(result)
     })
    
})
router.get('/search/moddroid', (req,res) => {
    const num = req.query.num
    const query = req.query.query
    if (!query) return res.json(loghandler.notquery)
    if (!num) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter num"})
    let url = (page == 1) ? 'https://moddroid.com/?s=' + query : 'https://moddroid.com/page/' + num + '?s=' + query
    try{

        axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data)
            const content = $("#primary")

            let apk = []
            const obj = {}
                
            obj.next_page = page + 1;
            obj.current_page = page;
            obj.prev_page = (page == 1) ? page : page - 1;

            content.find(".row > .col-12").each((id, el) => {


                let judul = $(el).find("a").find("h3").text().trim()
                let img = $(el).find("a").find('.flex-shrink-0 > img').attr("src").replace("-80x80","")
                let info = $(el).find("a").find('div.align-items-center').text().trim()
                let link = $(el).find("a").attr('href').replace("https://moddroid.com/","").replace(".html","")
                apk.push({
                    judul,
                    img,
                    info,
                    link
                })

                obj.data = apk
            })

            res.json(obj)
        })

    }catch{

    }
})
router.get("/search/rexdl", (req, res) => {
  const apkname = req.query.query;
  if (!query) return res.json(loghandler.notquery)
  rexdl(apkname)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
router.get("/search/an1", (req, res) => {
  const apkname = req.query.query;
  if (!query) return res.json(loghandler.notquery)
  andro1(apkname)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});
router.get('/search/gcwa', async (req, res, next) => {
    
     query = req.query.query
     if (!query) return res.json(loghandler.notquery)
     fetch(encodeURI(`https://dhn-api.herokuapp.com/api/whatsapp-group?apikey=DehanApi&nama=${query}`))
    .then(response => response.json())
     .then((data) => {
     var result = data;
       res.json({
    result: data.result
})
     })
    
})
router.get('/search/whatsappmod', async (req, res, next) => {
    
     query = req.query.query
     if (!query) return res.json(loghandler.notquery)
     fetch(encodeURI(`https://dhn-api.herokuapp.com/api/Whatsapp-Mods?apikey=DehanApi&nama=${query}`))
    .then(response => response.json())
     .then((data) => {
     var result = data;
       res.json({
    result: data.result
})
     })
    
})
router.get('/search/appstore', async (req, res, next) => {
    
     query = req.query.query
     num = req.query.num
     page = req.query.page
    if (!query) return res.json(loghandler.notquery)
    if (!num) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter num"})
    if (!page) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter page"})
     fetch(encodeURI(`https://gatauajg.yogipw.repl.co/api/search/appstore?query=${query}&num=${num}&page=${page}`))
    .then(response => response.json())
     .then((data) => {
     var result = data;
       res.json(result)
     })
    
})
router.get('/search/gsmarena', async (req, res, next) => {
    
        query = req.query.query

	
     if (!query) return res.json(loghandler.notquery)
     GSMArena(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     })
    
})
router.get('/search/googleimage', async (req, res, next) => {
var gis = require('g-i-s');
        query = req.query.query

	
     if (!query) return res.json(loghandler.notquery)
     gis(query)
     .then((data) => {
       res.json(data)
     })
    
})

router.get('/search/pinterest', async (req, res, next) => {
    
        query = req.query.query

	
     if (!query) return res.json(loghandler.notquery)
     pinterest(query)
     .then((data) => {
     var result = data.result;
       res.json(result)
     })
    
})
router.get('/search/pinterest2', async (req, res, next) => {
	    
        query = req.query.query

	
     if (!query) return res.json(loghandler.notquery)
          Cc = await fetch('http://fdciabdul.tech/api/pinterest/?keyword=${query}')
          const randCc = Cc[Math.floor(Math.random() * Cc.length)]
         re = await fetch(randCc).then(v => v.buffer())
         res.type('png')
         res.send(re)
})
router.get('/search/shopee', async (req, res, next) => {
    
        query = req.query.query

	
     if (!query) return res.json(loghandler.notquery)
     Shoope(query, 50)
     .then((data) => {
       res.json(data)
     })
    
})


router.get('/random/quotes/muslim', async (req, res, next) => {
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/random/asmaulhusna', async (req, res, next) => {
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/info/wikipedia', async (req, res, next) => {

            search = req.query.search
            
	
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/wiki?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/info/drakorasia', async (req, res, next) => {

            search = req.query.search
            
	
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/fakedata', async (req, res, next) => {

            country = req.query.country
            
	
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})



router.get('/music/liriklagu', async (req, res, next) => {

            lagu = req.query.query;
            
	
        if(!lagu) return res.json(loghandler.notquery)
        Lirik(lagu)
        .then((lirik) => {
          res.json({
            status: true,
            code: 200,
            result: lirik.data
          })
        });

})


router.get('/music/chordlagu', async (req, res, next) => {

            lagu = req.query.lagu
            
	
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/info/kbbi', async (req, res, next) => {

            kata = req.query.kata
            
	
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/info/covidindo', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/info/covidworld', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/random/meme', async (req, res, next) => {
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/info/kodepos', async (req, res, next) => {

	    kota = req.query.kota
            
	
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/translate', async (req, res, next) => {

	    kata = req.query.kata
            
	
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/anime/kusonime', async (req, res, next) => {
	    search = req.query.search
            
	
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/anime/dewabatch', async (req, res, next) => {

	    search = req.query.search
            
	
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://ferdizstar-afk.my.id/api/dewabatch?q=${search}`))
        .then(response => response.json())
        .then(data => {
        var anime = data;
             res.json({
             	status: true,
                 code: 200,
                 author: `${creator}`,
                 anime
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/anime/kusonime2', async (req, res, next) => {

	    search = req.query.search
            
	
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://ferdizstar-afk.my.id/api/kuso?q=${search}`))
        .then(response => response.json())
        .then(data => {
        var anime = data;
             res.json({
             	status: true,
                 code: 200,
                 author: `${creator}`,
                 anime
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/loli', async(req, res, next) => {
    
    
    
    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }
        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))
            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]
        res.json({
              status: true,
              code: 200,
              
              result: hasil
            })
        })
    } catch (e) {}
    
});


router.get('/anime/manga', async (req, res, next) => {

	    search = req.query.search
            
	
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/kuis/caklontong', async (req, res, next) => {
        
	
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=caklontong`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/kuis/math', async (req, res, next) => {
  bu = await fetch('https://salism3api.pythonanywhere.com/math').then(v => v.json())
  res.json({ status: true, soal: bu.image, jawaban: bu.answer})
})

router.get('/kuis/tebakGambar', async (req, res, next) => {
  let result = await tebakGambar()
  if (result) {
    const hasil = {
      status: true,
      code: 200,
      
      image: result.img,
      jawaban: result.jawaban,
      clue: result.petunjuk
    }
    res.json(hasil)
  } else {
    return res.status(408).json({
      status: res.statusCode,
      error: 'Emror'
    })
  }
})
router.get('/kuis/tebakbendera', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakbendera.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/kuis/tebaklirik', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebaklirik.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/kuis/tebakchara', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakchara.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/kuis/tebakkimia', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakkimia.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/kuis/tebakjenaka', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/tebakjenaka.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/kuis/family100', async (req, res, next) => {
  const bg = JSON.parse(fs.readFileSync(__path +'/data/family100.json'));
  const tod = bg[Math.floor(Math.random() * bg.lenght)];
  var result = tod.result;
             res.json(result)

})
/**
* @Maker
**/



router.get("/photooxy/shadow", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pShadow(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/romantic", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pRomantic(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

// @PHOTOOXY

router.get("/photooxy/smoke", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pSmoke(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/burn-papper", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pBurnPapper(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/naruto", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pNaruto(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/love-message", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pLoveMsg(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/message-under-grass", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pMsgGrass(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/glitch", async(req, res, next) => {
  const text1 = req.query.text1;
  const text2 = req.query.text2;
  
  if(!text1) return res.json(loghandler.nottext1)
  if(!text2) return res.json(loghandler.nottext2)
  
  
  pGlitch(text1, text2)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/double-heart", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pDoubleHeart(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/coffe-cup", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pCoffeCup(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/love-text", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pLoveText(text1)
    .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(error)
    });
    
});

router.get("/photooxy/butterfly", async(req, res, next) => {
  const text1 = req.query.text;
  
  if(!text1) return res.json(loghandler.nottext1)
  
  
  pButterfly(text1)
  .then((data) => {
      const result = {
        status: true,
        code: 200,
        
        result: data.url
      }
      res.json(result)
    })
    .catch((error) => {
      res.json(loghandler.error)
    })
    
});

/*
@ AKHIR PHOTOOXY
*/
//Ra-API

 

//End fun


//End Ra-Api
//gacha
router.get('/cewe/vietnam', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/cewe/thailand', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/cewe/korea', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/cewe/indonesia', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/cewe/malaysia', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/cewe/china', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cewe/japan', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cewe/coli', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/coli.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cewe/malaysia', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/jenni', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/Jenni.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/jiso', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/Jiso.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/Lisa', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/Lisa.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/rose', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/Rose.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/harley', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/harley.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/anony', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/anony.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/joker', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/joker.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/cewek', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/cewek.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/husbu', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/husbu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/cosplay', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/cosplay.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/cantik/waifu', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cecan/waifu.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/sasuke', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Sasuke.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/hinata', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Hinata.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/akame', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/akame.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/emilia', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Emilia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/milf', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/milf.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/nakano', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/nakano.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/neko', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/neko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/memeindo', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/memeindo.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/loli', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/loli.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/darkjokes', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/darkjokes.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


router.get('/anime/mikasa', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Mikasa.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/akiyama', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Mio-akiyama.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/erza', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Erza-scarlet.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/naruto', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/Naruto.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/anime/hentai', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/ido/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/cowok', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/cowok.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Baekhyung', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/BaekHyung.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Dokyungso', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/DohKyungSoo.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Huangzitao', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/HuangZitao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/J_hope', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/J_hope.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Jimin', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/Jimin.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Jungkook', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/Jungkook.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/ganteng/Kimjondae', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/cogan/KimJonDae.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})


//End Ra-Api
//SFW
router.get('/sfw/waifu', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/neko', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/shinobu', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/shinobu`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/megumin', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/megumin`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/bully', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/bully`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/cuddle', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/cuddle`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/cry', async (req, res, next) => {     
       fetch(encodeURI(`https://waifu.pics/api/sfw/cry`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/hug', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/hug`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/awoo', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/awoo`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/kiss', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/kiss`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
             buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/lick', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/lick`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
             
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/sfw/happy', async (req, res, next) => {
       fetch(encodeURI(`https://waifu.pics/api/sfw/happy`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        buffer = await fetch(data.url)
        res.type('png')
        res.send(await buffer.buffer())
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

//NSFW
router.get('/nsfw/ass', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/ahegao', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/bdsm', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/blowjob', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/cuckold', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/cum', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/ero', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/femdom', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/foot', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/gangbang', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/glasses', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/hentai', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/hentaigif', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/jahy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/masturbation', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/nsfwNeko', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/orgy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/panties', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/pussy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/santuy', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/hots', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/asupan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/bocil', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/ukhty', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/tiktok', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Lampung-keras/Test/main/tiktok.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/ukhty2', async (req, res, next) => {

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/geayubi', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/cecan', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/hijab', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/FznXSec404/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/ghea', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/asupan/rikagusriani', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/thighs', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})

router.get('/nsfw/yuri', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
               result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/wallpaper/teknologi', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/wallpaper/mountain', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/wallpaper/programming', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/wallpaper/game', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/Game%20Wallp.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
router.get('/wallpaper/cyberspace', async (req, res, next) => {

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})

})
///NSFW END
/*
@AKHIR TEXTPRO ME
*/

router.get('/maker/dadu', async (req, res, next) => {
      random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
});
router.get('/asupan', async (req, res, next) => {
    const asupan = JSON.parse(fs.readFileSync(__path +'/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/asupan.mp4', data)
    res.sendFile(__path +'/tmp/asupan.mp4')
});
router.get("/maker/nulis", async (req, res, next) => {
  text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
    let hasil = 'http://zekais-api.herokuapp.com/bukukanan?text='+ text +'&apikey=apivinz' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/nulis.jpeg', data)
    res.sendFile(__path +'/tmp/nulis.jpeg')
})
router.get("/other/ssweb", async (req, res, next) => {
   const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
    let hasil = 'https://leyscoders-api.herokuapp.com/api/ssweb-pc?url='+ url +'&apikey=dappakntlll' 
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path +'/tmp/ssweb.jpeg', data)
    res.sendFile(__path +'/tmp/ssweb.jpeg')
})
router.get('/maker/ttp', async(req, res, next) => {
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  let hasil = 'https://pecundang.herokuapp.com/api/texttopng?teks='+ text +'&apikey=adadeh'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp.png', data)
  res.sendFile(__path +'/tmp/ttp.png')
});
router.get('/maker/ttp2', async(req, res, next) => {
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  let hasil = 'https://pecundang.herokuapp.com/api/texttopng2?teks='+ text +'&apikey=adadeh'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/ttp2.png', data)
  res.sendFile(__path +'/tmp/ttp2.png')
});
router.get('/maker/attp', async(req, res, next) => {
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  let hasil = 'https://alpin-api-2021.herokuapp.com/api/attp?text='+ text +'&apikey=alpin1'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/attp.gif', data)
  res.sendFile(__path +'/tmp/attp.gif')
})
router.get('/maker/harta-tahta', async(req, res, next) => {
  const text = req.query.text;
  if(!text) return res.json(loghandler.nottext)
  let hasil = 'https://api.zeks.xyz/api/hartatahta?text='+ text +'&apikey=apivinz' 
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tahta.jpg', data)
  res.sendFile(__path +'/tmp/tahta.jpg')
});
router.get('/maker/skatch', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://lindow-api.herokuapp.com/api/sketcheffect?img=${url}&apikey=LindowApi`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/skatch.jpeg', data)
        res.sendFile(__path+'/tmp/skatch.jpeg')
});

router.get('/maker/emoji2png', async(req, res, next) => {
  const Emoji = req.query.text;
  if(!Emoji) return res.json(loghandler.nottext)
    emoji.get(Emoji)
    .then(img_emoji => {
      const result = {
        status: true,
        code: 200,
        
        result: img_emoji.images[0].url
      }
      res.json(result)
    })
  
    .catch((err) => {
      res.json(loghandler.error)
    })
  
});
router.get('/web2plain-text', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl) 
    fetch(encodeURI(`https://websitetextextraction.apifex.com/api/v1/extract?url=${url}`))
    .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
               status: true,
               code: 200,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
});
//CANVAS




//imageedit
router.get('/imgedit/gay', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/gay?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/gay2', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/gay?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/komunis', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/communism?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/hitler', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/hitler?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblue', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblack?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/discordblack', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/discordblue?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/circle', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/circle?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/captcha', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/captcha?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/police', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/police?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/continued', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/tembak/continued?img=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/putin', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/putin?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/petimati', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/petimati?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/presentasi', async(req, res, next) => {
  const text = req.query.text;
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  let hasil = `https://gatauajg.yogipw.repl.co/api/lisapresentation?text=${text}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/penjara', async(req, res, next) => {
  const url = req.query.text;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://gatauajg.yogipw.repl.co/api/jail?url=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tod.png', data)
        res.sendFile(__path+'/tmp/tod.png')
});
router.get('/imgedit/glass', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/glass?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/glass.png', data)
        res.sendFile(__path+'/tmp/glass.png')
});
router.get('/imgedit/wasted', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/wasted.png', data)
        res.sendFile(__path+'/tmp/wasted.png')
});
router.get('/imgedit/triger', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/triggered?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/triger.gif', data)
        res.sendFile(__path+'/tmp/triger.gif')
  
});
router.get('/imgedit/greyscale', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/greyscale?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gscale.png', data)
        res.sendFile(__path+'/tmp/gscale.png')
});
router.get('/imgedit/invert', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/invert?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/invert.png', data)
        res.sendFile(__path+'/tmp/invert.png')
});
router.get('/imgedit/brightness', async(req, res, next) => {
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  let hasil = `https://some-random-api.ml/canvas/brightness?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/cerah.png', data)
        res.sendFile(__path+'/tmp/cerah.png')
});
router.get('/imgedit/sepia', async(req, res, next) => {
  
  const url = req.query.url;
  if(!url) return res.json(loghandler.noturl)
  
  
  let hasil = `https://some-random-api.ml/canvas/sepia?avatar=${url}`
  data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/sepia.png', data)
        res.sendFile(__path+'/tmp/sepia.png')
  
});
router.get('/imgedit/enhance', async (req, res) => {
    var img = req.query.img;
  if (!img) return res.json(loghandler.notimg)
  if (!img.startsWith('http')) return res.json(loghandler.invalidLink)
try {
     var media = await getBuffer(img)
     var body = new FormData
         body.append('image', media, 'image')
         var ress = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
            method: 'POST',
            body
            })
  if (ress.status !== 200) return await res.json(ress)
    await fs.writeFileSync(__path + '/tmp/hd.png', await ress.buffer())

    res.sendFile(__path + '/tmp/hd.png')
   } catch (e) {
	 console.log(e)
    res.sendFile(error)
  }
})
//VOKAL GENERATOR
router.get('/hilih', async (req, res, next) => {
const kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        hilih = kata.replace(/['a','o','u','e']/g, "i").replace(/['A','O','U','E']/g, "I");
        res.json({ 
        status: true,
        creator: creator, 
        teks: {
        before: kata,
        after: hilih
       }
       })
})
router.get('/halah', async (req, res, next) => {
const kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        halah = kata.replace(/['a','o','u','e']/g, "a").replace(/['A','O','U','E']/g, "A");
        res.json({ 
        status: true,
        creator: creator, 
        teks: {
        before: kata,
        after: halah
       }
       })
})
router.get('/holoh', async (req, res, next) => {
const kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        holoh = kata.replace(/['a','o','u','e']/g, "o").replace(/['A','O','U','E']/g, "O");
        res.json({ 
        status: true,
        creator: creator, 
        teks: {
        before: kata,
        after: holoh
       }
       })
})
router.get('/heleh', async (req, res, next) => {
const kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        heleh = kata.replace(/['a','o','u','e']/g, "e").replace(/['A','O','U','E']/g, "E");
        res.json({ 
        status: true,
        creator: creator, 
        teks: {
        before: kata,
        after: heleh
       }
       })
})
router.get('/huluh', async (req, res, next) => {
const kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        heleh = kata.replace(/['a','o','u','e']/g, "u").replace(/['A','O','U','E']/g, "U");
        res.json({ 
        status: true,
        creator: creator, 
        teks: {
        before: kata,
        after: heleh
       }
       })
})
//randomtext
router.get('/quotes', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/randomquotes.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/quotes/bucin', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesbucin.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/quotes/islam', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesislam.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/quotes/anime', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/quotesanime.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/nickepep', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/nickepep.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/faktaunik', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/faktaunik.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/fml', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/fuckmylife.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
}) 
router.get('/katabijak', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katabijak.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/katacinta', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katacinta.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})
router.get('/katasenja', async (req, res, next) => {
  const flag = JSON.parse(fs.readFileSync(__path +'/data/katasenja.json'));
  const tod = flag[Math.floor(Math.random() * flag.length)];
  var result = tod.result;
             res.json(result)
})


router.get('/cerpen', async (req, res, next) => {
        RandomCerpen()
        .then((tod) => {
          res.json({
            status: true,
            code: 200,
            judul: tod.result.Judul, 
            penulis: tod.result.Penulis, 
            cerita: tod.result.cerita
          })
        });
})
router.get('/pantun', async (req, res, next) => {
        const pantun = await Pantun()
          res.json({
            status: true,
            code: 200,
            pantun: pantun
        });
})
//FUN
router.get('/fun/artinama', async (req, res, next) => {
const nama = req.query.nama
if (!nama) return res.json({ status: 404, error: 'masukkan param nama'})
        artinama(nama)
        .then((tod) => {
          res.json(tod)
        });
})
router.get('/fun/artimimpi', async (req, res, next) => {
const mimpi = req.query.mimpi
if (!mimpi) return res.json({ status: 404, error: 'masukkan param mimpi'})
        artimimpi(mimpi)
        .then((tod) => {
          res.json(tod)
        });
})
router.get('/fun/ramaljadian', async (req, res, next) => {
const tanggal = req.query.tanggal
const bulan = req.query.bulan
const tahun = req.query.tahun
if (!tanggal) return res.json({ status: 404, error: 'masukkan param tanggal'})
if (!bulan) return res.json({ status: 404, error: 'masukkan param bulan'})
if (!tahun) return res.json({ status: 404, error: 'masukkan param tahun'})
        RamalJadian(tanggal, bulan, tahun)
        .then((tod) => {
         var result = tod;
          res.json({
            status: true,
            code: 200,
            result
          })
        });
})


//TRUTH DARE
router.get('/fun/truth', async (req, res, next) => {
        const truth = await trutdare('truth id')
          res.json({
            status: true,
            code: 200,
            truth: truth
        });
})
router.get('/fun/dare', async (req, res, next) => {
        const dare = await trutdare('dare id')
          res.json({
            status: true,
            code: 200,
            dare: dare
        });
})


//KARTUN DAN ANIMEK
router.get('/kartun/genre/adventure', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/adventure`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/genre/movie', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/movie`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/genre/action', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/action`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/genre/drama', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/drama`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/genre/comedy', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/comedy`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/genre/military', async (req, res, next) => {
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/genre/military`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/kartun/search', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`https://kartun-api-zahirr.herokuapp.com/api/kartun/search?film=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//ANIMEK
router.get('/animek/dewabatch', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/dewabatch?q=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/animek/otakudesu', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       Otakudesu(query) 
        .then(data => {
        var result = data.result;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/animek/kusonime', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/kuso?q=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
//FILM & MOVIE
router.get('/film/lk21/search', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`http://api-lk21.herokuapp.com/search?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
router.get('/film/lk21/newupload', async (req, res, next) => {
const page = req.query.page;
if(!page) return res.json({ status: 404, error: 'masukkan param page'})
       fetch(encodeURI(`https://api-lk21.herokuapp.com/newupload?page=${page}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
router.get('/film/lk21/genre', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json({ status: 404, error: 'masukkan param query'})
       fetch(encodeURI(`http://api-lk21.herokuapp.com/genre?genre=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 

router.get('/film/filmapik/search', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`http://api-filmapik-yogipw.herokuapp.com/search?q=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
router.get('/film/filmapik/category', async (req, res, next) => {
const query = req.query.query;
if(!query) return res.json(loghandler.notquery)
       fetch(encodeURI(`http://api-filmapik-yogipw.herokuapp.com/category?search=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
router.get('/film/filmapik/play', async (req, res, next) => {
const id = req.query.id;
if(!id) return res.json({ status: 404, error: 'masukkan param id'})
       fetch(encodeURI(`http://api-filmapik-yogipw.herokuapp.com/play?id=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 
router.get('/film/filmapik/latest', async (req, res, next) => {
       fetch(encodeURI(`http://api-filmapik-yogipw.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
}) 


//ANIMEKKKKK GOGO
router.get('/husbu', async (req, res, next) => {
fcx = await fetch('https://raw.githubusercontent.com/Caliph71/txt/main/husbu.js')
data = await fcx.text()
json = JSON.parse(data)
randoms = Math.floor(Math.random() * json.length)
random = json[randoms]
	 //if(!text) return res.json(loghandler.nottext)
	 res.json({
	   name: random.teks,
	   url: random.image
	 })
})

//FORMATTER API
router.get('/formatter/toterbilang', async(req, res, next) => {
  const angka = req.query.angka;
  if(!angka) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter angka"})
  
  
  toUcFirst(toTerbilang(angka))
    .then((result) => {
      res.json({
        status: true,
        code: 200,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });
    
});
//TEXTPRO 2
router.get('/textpro/logo-wolf', async(req, res, next) => {
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
    zrapi 
  .textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/graffiti', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/graffiti1', async(req, res, next) => {
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
    zrapi 
  .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/blackpink', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/3dstone', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/neonlight', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/glitchtext', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/pornhub', async(req, res, next) => {
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
    zrapi 
  .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    text, text2
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/textpantai', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/textpantai2', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/marvel', async(req, res, next) => {
  const text = req.query.text;
  const text2 = req.query.text2;
  
  if(!text) return res.json(loghandler.nottext)
  if(!text2) return res.json(loghandler.nottext2)
  
    zrapi 
  .textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/magmatext', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/watercolor', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/harrypotter', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/jokerlogo', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-logo-joker-online-934.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/dropwater', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/dropwater-text-effect-872.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/transformer', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/thunder', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/breakwall', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/break-wall-text-effect-871.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/textpro/sky', async(req, res, next) => {
  const text = req.query.text;
  
  if(!text) return res.json(loghandler.nottext)
  
    zrapi 
  .textpro("https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html", [
    text
  ])
  .then((data) => {
    res.json({
      status: true,
      code: 200,
      creator: `${creator}`,
      result: data
    })
  })
         .catch(e => {
         	res.json(loghandler.error)
})
})
//YYHH

router.get('/covidindo', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/covidworld', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/mediafire', async (req, res, next) => {
if (!req.query.url) return res.send({ status: 500, msg : 'Masukkan Parameter url'})
try {
f = require ('../lib/mediafire')
res.json(await f(req.query.url))
} catch {
 res.send('TerJadi Kesalahan, Mungkin Url Tidak Valid')
}
})
router.get('/wpnime', async (req, res, next) => {
const Nekos = require('nekos.life')
const neko = new Nekos()
urlnya = (await neko.sfw.wallpaper()).url
data = await fetchJson(`https://api.imgbb.com/1/upload?key=761ea2d5575581057a799d14e9c78e28&image=${urlnya}`)
buffer = await fetch(data.data.url)
res.type('png')
res.send(await buffer.buffer())
})
router.get('/google', async (req, res, next) => {
   yt = require('google-it')
 if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
 ser = await yt({ query: req.query.q})
 res.json({ status: 'success', result: ser})
 })
 router.get('/herodetail', async (req, res, next) => {
 if (!req.query.q) return res.json({ status: false, msg: 'Masukkan Parameter q'})
 ser = await herodetail(req.query.q)
 res.json(ser)
 })
 router.get('/herolist', async (req, res, next) => {
 ser = await herolist()
 res.json(ser)
 })
 

//CANVAS API
router.get('/welcome', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
let hasil = `https://gatauajg.yogipw.repl.co/api/welcome?name=${req.query.name}&mem=${req.query.mem}&gcname=${req.query.gcname}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/goodbye', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
let hasil = `https://gatauajg.yogipw.repl.co/api/goodbye?name=${req.query.name}&mem=${req.query.mem}&gcname=${req.query.gcname}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/welcome2', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})
let hasil = `https://gatauajg.yogipw.repl.co/api/welcome2?name=${encodeURIComponent(req.query.name.toUpperCase())}&mem=${encodeURIComponent(req.query.mem.toUpperCase())}&gcname=${encodeURIComponent(req.query.gcname.toUpperCase())}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}&gcicon=${req.query.gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});
router.get('/goodbye2', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})
let hasil = `https://gatauajg.yogipw.repl.co/api/goodbye2?name=${encodeURIComponent(req.query.name.toUpperCase())}&mem=${encodeURIComponent(req.query.mem.toUpperCase())}&gcname=${encodeURIComponent(req.query.gcname.toUpperCase())}&picurl=${req.query.picurl}&bgurl=${req.query.bgurl}&gcicon=${req.query.gcicon}`
  data = await fetch(hasil).then(v => v.buffer())
  & fs.writeFileSync(__path +'/tmp/tod.png', data)
  res.sendFile(__path+'/tmp/tod.png')
  
});



//NEWS API
router.get("/news/cnn", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/cnn-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/cnbc", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/cnbc-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/republika", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/republika-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/tempo", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/tempo-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/antara", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/antara-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/kumparan", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/kumparan-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/okezone", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/okezone-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/liputan6", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/liputan6-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/bbc", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/bbc-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});
router.get("/news/tribun", async(req, res, next) => {
    fetch(encodeURI(`https://berita-indo-api.vercel.app/v1/tribun-news/`))
        .then(response => response.json())
        .then((result) => {
            res.json({
              result: result.data
});
        })
        .catch((error) => {
            res.json(error);
        });
});


//GOGOANIME
router.get('/gogoanime/anime/fromurl', async(req, res, next) => {
  
  const anime = req.query.url;
  
  
  if(!anime) return res.json({status: false, code: 406, message: 'masukkan parameter url'})
  
  Anime.fromUrl(anime).then(function(anime) {
  res.json(anime)
})
  
})

router.get('/gogoanime/search/anime', async(req, res, next) => {
  
  const anime = req.query.name;
  
  
  if(!anime) return res.json({status: false, code: 406, message: 'masukkan parameter name'})
  
  Anime.search(anime).then(function (results) {
  // Same as above but uses the second search result rather than the first.
  results[1].toAnime().then(function (mek) {
    res.json(mek)
  })
  }) 
  
})
router.get('/gogoanime/search/alleps', async(req, res, next) => {
  
  const anime = req.query.name;
  
  
  if(!anime) return res.json({status: false, code: 406, message: 'masukkan parameter name'})
  
  Anime.fromName('Yoru no Yatterman').then(function(anime) {
  anime.fetchAllEpisodes().then(function(mek) {
    res.json(mek)
  })
  }) 
  
})
//TEST
router.get('/welcome3', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Welcome")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})
router.get('/goodbye3', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Goodbye")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})

router.get('/promote', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Promote")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})
router.get('/demote', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.msg) return res.json({ status: 404, error: 'masukkan param msg'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
var canvas = require('discanvas')
const welcomer = await new canvas.Welcome()
    .setAvatar(req.query.picurl)
    .setUsername(`${req.query.name}#${req.query.mem}`)
    .setBackground("BACKGROUND", req.query.bgurl)
    //or : .setBackground("COLOR", "#ff5555")
    .setMainText("Demote")
    .setSecondText(req.query.msg)
    /*
    .setCircleColor("#ff5555")
    .setMainTextColor("#ff5555")
    .setSecondTextColor("#ff5555")
    .setPseudoColor("#ff5555")
    */
    .toWelcome() 
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})


//SEARCH TERBARU
router.get('/search/servermc', async (req, res, next) => {
if (!req.query.ip) return res.json({ status: 404, error: 'masukkan param ip'})
    ping(req.query.ip).then(res =>{ //IP mc.hypixel.net
        res.json(res)
    })
})

router.get('/search/roblox/userinfo', async (req, res, next) => {
if (!req.query.id) return res.json({ status: 404, error: 'masukkan param id'})
    const Data = await Rblx.userInfo(req.query.id) // Replace "2871326" with the user Id you want to search data for.
    res.json(Data)
})
router.get('/search/roblox/userfriend', async (req, res, next) => {
if (!req.query.id) return res.json({ status: 404, error: 'masukkan param id'})
    const Data = await Rblx.userFriends(req.query.id) // Replace "2871326" with the user Id you want to search data for.
    res.json(Data)
})
router.get('/search/roblox/badgeinfo', async (req, res, next) => {
if (!req.query.id) return res.json({ status: 404, error: 'masukkan param id'})
    const Data = await Rblx.badgeInfo(req.query.id) // Replace "958186367" with the user Id you want to search data for.
    res.json(Data)
})
//PORNHUB
router.get('/pornhub/search', async (req, res, next) => {

        query = req.query.query

     if (!query) return res.json(loghandler.notquery)
     pornhub.search('Video', query).then(res => {
     res.data.forEach(item => {
       res.json(item)
     })
    }) 
})
router.get('/nekopoi/download', async (req, res, next) => {
const nekopoi = require('nekobocc')

        url = req.query.url

     if (!url) return res.json({ status: 404, error: 'masukkan param url'})
     
     const tod = await nekopoi.getHentaiEpisode(url)
     res.json(tod)
    
})
router.get('/nhentaidownloader', async (req, res, next) => {
const nhdl = require('nhentaidownloader');
  ID = req.query.kode
  if (!req.query.kode) return res.json({ status: 404, error: 'masukkan param kode'})
  nhdl(ID).then(async buffer => {
  await fs.writeFileSync(__path +`/public/storage/${ID}.zip`, buffer)
  const result = {
        status: true,
        code: 200,
        
        result: `https://api-yogipw.herokuapp.com/storage/${ID}.zip`
      }
      res.json(result)
});
})
router.get('/rankcard', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.currentxp) return res.json({ status: 404, error: 'masukkan param currentxp'})
if (!req.query.requiredxp) return res.json({ status: 404, error: 'masukkan param requiredxp'})
if (!req.query.level) return res.json({ status: 404, error: 'masukkan param level'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.discriminator) return res.json({ status: 404, error: 'masukkan param discriminator'})
const { Swiftcord } = require("swiftcord")
const cord = new Swiftcord();
let image = await cord.rank()
            .setAvatar(req.query.picurl)
            .setCurrentXP(req.query.currentxp)
            .setRequiredXP(req.query.requiredxp)
            .setStatus("dnd")
            .setProgressBar("#FFFFFF")
            .setUsername(req.query.name)
            .setDiscriminator(req.query.discriminator)
            .setBackground(req.query.bgurl)
            .setLevel(req.query.level)
            .setRank()
            .toAttachment();
                const img = cord.write(image, "rank.png").then((buffer) => {
               res.type('png');
               res.send(buffer)
        }) 
})
/*       
]=====> FEATURES ROUTES {END}<=====[
*/
router.use(function (req, res) {

    res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
