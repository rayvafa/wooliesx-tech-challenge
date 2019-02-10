const orderBy = require('lodash/orderBy');
const GetProducts = require('../clients/GetProducts');

function SortProducts(req, res) {
  const sortOption = req.query.sortOption;
  console.log(sortOption);

  GetProducts().then((products) => {
    let sortedProducts = [];

    switch(sortOption) {
      case 'Low':
        sortedProducts = orderBy(products, ['price'], ['asc']);
        break;
      case 'High':
        sortedProducts = orderBy(products, ['price'], ['desc']);
        break;
      case 'Ascending':
        sortedProducts = orderBy(products, ['name'], ['asc']);
        break;
      case 'Descending':
        sortedProducts = orderBy(products, ['name'], ['desc']);
        break;
      case 'Recommended':
        // todo recommended logic
        sortedProducts = [];
        break;
    }

    res.header('Content-Type', 'application/json');
    res.end(JSON.stringify(sortedProducts));
  });
}

module.exports = {
  SortProducts
};
