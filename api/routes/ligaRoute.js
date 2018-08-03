var express = require('express');
var router = express.Router();

// Require controller modules.
var ligaController = require('../controllers/ligaController');

router.get('/', ligaController.list);

router.post('/liga/create', ligaController.create);

router.put('/liga/update', ligaController.update);

router.delete('/liga/delete', ligaController.delete);

module.exports = router;
