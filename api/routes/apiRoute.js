var express = require('express');
var router = express.Router();


var ligaRoute = require('./ligaRoute');

router.get('/', (req, res) => res.json([{ api : "Bet-FC API with Node.JS."}]));

router.use('/liga', ligaRoute );

//router.post('/liga/create', book_controller.book_create_post);

module.exports = router;
