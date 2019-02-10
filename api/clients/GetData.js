const axios = require('axios');
const config = require('../../config/index');

async function GetData(url) {
  try {
    const response = await axios.get(
      url,
      {
        params: {
          token: config.TOKEN
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = GetData;
