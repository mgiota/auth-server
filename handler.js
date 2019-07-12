'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=t4rva9pn92dlc3v396d4u5ricj'
    + '&client_secret=im42p66i0tensh8mcmu5nm8qjk'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://maraxai.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);
  console.log(info)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token
      }),
  };
};
