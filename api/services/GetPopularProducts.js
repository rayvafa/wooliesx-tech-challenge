const GetData = require('../clients/GetData');
const config = require('../../config/index');

async function GetPopularProducts() {
  let popularProducts = [];
  const getShoppingHistories = await GetData(config.WOOLIESX_API.SHOPPING_HISTORY);

  getShoppingHistories.map((shoppingHistory) => {
    shoppingHistory.products.map((product) => {
      popularProducts[product.name] = (popularProducts[product.name] || 0) + product.quantity;
    });
  });

  return popularProducts.sort((a,b)=>{return a-b;});
}

module.exports = GetPopularProducts;
