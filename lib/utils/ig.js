const ig = require("instatouch");
const dotenv = require('dotenv').config()
const sID = process.env.sID;

const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
  session: "sessionid=" + sID
};

async function igStalk(username = 'instagram') {
  return new Promise(async (resolve, reject) => {
		let {
			data
		} = await axios('https://www.instagram.com/' + username + '/?__a=1', {
			'method': 'GET',
			'headers': {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
				'cookie': 'isi sendiri cokie igeh'
			}
		})
		let user = data.graphql.user
		let json = {
			creator: '"idoganz_',
			status: 'ok',
			code: 200,
			username: user.username,
			fullname: user.full_name,
			verified: user.is_verified,
			video_count_reel: user.highlight_reel_count,
			followers: user.edge_followed_by.count,
			follow: user.edge_follow.count,
			is_bussines: user.is_business_account,
			is_professional: user.is_professional_account,
			category: user.category_name,
			thumbnail: user.profile_pic_url_hd,
			bio: user.biography,
			info_account: data.seo_category_infos
		}
		resolve(json)
	})
}

async function igDownload(url) {
  return new Promise((resolve, reject) => {
    if (url === 'undefined') { 
      reject({
        msg: 'Masukkan URL nya.'
      })
    }
    url = url.split('?')[0];
      try {
      ig.getPostMeta(url, options)
      .then(data =>
        resolve({
          id: data.graphql.shortcode_media.id,
          shortCode: data.graphql.shortcode_media.shortcode,
          caption: data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text,
          url: data.graphql.shortcode_media.display_url
        })
      )
    } 
    catch(err) {
      reject({
        status: 406,
        creator: '@yogipw',
        msg: "Link Tidak Valid"
      })
    }
  })
}

module.exports = {
  igStalk,
  igDownload
};
