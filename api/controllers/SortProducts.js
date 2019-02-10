const GetProducts = require('../clients/GetProducts');

function SortProducts(req, res) {
  const sortOption = req.query.sortOption;
  console.log(sortOption);

  GetProducts().then((products) => {
    console.log(products);
    res.header('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
  });
}

module.exports = {
  SortProducts
};
