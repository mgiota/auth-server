'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=f29ecfroc9i5bv87ohotsj9pvt'
    + '&client_secret=ul80b565abcj1gv257lcl48p18'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://mgiota.github.io/meetup'
    + '&code=' + event.pathParameters.code;
    // + '&code=27b38b0e2677385529ee407d4c52ae4f';


  const info = await axios.post(MEETUP_OAUTH_URL);
  console.log(info)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token
      }),
  };
};
