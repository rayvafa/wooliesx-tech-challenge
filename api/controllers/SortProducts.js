const config = require('../../config/index');

function SortProducts(req, res) {
  const products = [
    {
      name: "Product A"
    }
  ];
  res.header('Content-Type', 'application/json');
  res.end(JSON.stringify(products));
}

module.exports = {
  SortProducts
};
