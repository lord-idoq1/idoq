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
  return new Promise((resolve, reject) => {
    try {
      ig.getUserMeta(username, options)
        .then((data) => {
          resolve({
             data: {
              biography: data.graphql.user.biography,
              blocked_by_viewer: data.graphql.user.blocked_by_viewer,
           edge_followed_by: {  
             count: edge_followed_by.graphql.user.count,
             fbid: edge_followed_by.graphql.user.fbid,
           edge_follow: {
             count: edge_follow.graphql.user.count,
             follows_viewer: edge_follow.graphql.user.follows_viewer,
             full_name: edge_follow.graphql.user.full_name,
             id: edge_follow.graphql.user.id,
             business_address_json: edge_follow.business_address_json,
             business_contact_method: edge_follow.business_contact_method,
             business_email: edge_follow.business_email,
             business_phone_number: edge_follow.business_phone_number,
             business_category_name: edge_follow.business_category_name,
           edge_mutual_followed_by: {
             profile_pic_url: edge_mutual_followed_by.profile_pic_url,
             profile_pic_url_hd: edge_mutual_followed_by.profile_pic_url_hd
            }
          });
        })
        .catch((err) =>
          reject({
            message: "akun tidak di temukan"
          })
        );
    } catch (err) {
      reject(err);
    }
  });
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
