var ligaService = require('../services/ligaService');


exports.list = function(req, res) {
    res.json(ligaService.list());
};

exports.create = function(req, res) {
    res.json(ligaService.list());
};

exports.update = function(req, res) {
    res.json(ligaService.list());
};

exports.delete = function(req, res) {
    res.json(ligaService.list());
};
