const config = require('../../config/index');

function GetUser(req, res) {
  const user = {
    "name": config.NAME,
    "token": config.TOKEN
  };
  res.header('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
}

module.exports = {
  GetUser
};
