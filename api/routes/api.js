var express = require('express');
var router = express.Router();

// Require controller modules.
var ligaController = require('../controllers/ligaController');

router.get('/', (req, res) => res.json([{ api : "Bet-FC API with Node.JS."}]));

router.get('/liga', ligaController.list );

//router.post('/liga/create', book_controller.book_create_post);

module.exports = router;
