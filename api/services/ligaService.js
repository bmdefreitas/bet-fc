const liga = require('../models/liga');

exports.list = () => {
  liga.nome = "Teste";
  return liga;
};