const axios = require('axios');
const config = require('../../config/index');

async function getProducts() {
  try {
    const response = await axios.get(
      config.WOOLIESX_API.PRODUCTS,
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

module.exports = getProducts;
