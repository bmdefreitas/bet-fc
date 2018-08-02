var ligaService = require('../services/ligaService');

// Display list of all Authors.
exports.list = function(req, res) {
    res.json(ligaService.list());
};
