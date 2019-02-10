const orderBy = require('lodash/orderBy');
const find = require('lodash/find');
const GetData = require('../clients/GetData');
const GetPopularProducts = require('../services/GetPopularProducts');
const config = require('../../config/index');

function SortProducts(req, res) {
  const sortOption = req.query.sortOption;
  res.header('Content-Type', 'application/json');

  GetData(config.WOOLIESX_API.PRODUCTS).then((products) => {
    let sortedProducts = [];

    switch(sortOption) {
      case 'Low':
        sortedProducts = orderBy(products, ['price'], ['asc']);
        res.end(JSON.stringify(sortedProducts));
        break;
      case 'High':
        sortedProducts = orderBy(products, ['price'], ['desc']);
        res.end(JSON.stringify(sortedProducts));
        break;
      case 'Ascending':
        sortedProducts = orderBy(products, ['name'], ['asc']);
        res.end(JSON.stringify(sortedProducts));
        break;
      case 'Descending':
        sortedProducts = orderBy(products, ['name'], ['desc']);
        res.end(JSON.stringify(sortedProducts));
        break;
      case 'Recommended':
        let recommendedProducts = [];
        GetPopularProducts().then((popularProducts) => {
          Object.keys(popularProducts).forEach(function(key, index) {
            recommendedProducts.push(find(products, { 'name': key }))
          });
          res.end(JSON.stringify(recommendedProducts));
        });
        sortedProducts = [];
        break;
    }
  });
}

module.exports = {
  SortProducts
};
