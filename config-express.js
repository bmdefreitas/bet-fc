const express = require('express')
, app = express()
, cors = require('cors');
const path = require('path');

const index = require('./views/routes/index');
const web = require('./views/routes/web');
const api = require('./api/routes/api');


app.use(cors());

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
    console.log('Server error. Cause:');
    console.log(err.stack);
    res.status(500).json({ message: 'internal server error' });
});

app.use('/', index);
app.use('/web', web);
app.use('/api', api);

app.use('*', (req, res) => {
    const message = `${req.originalUrl} not found`;
    console.log(message);
    res.statusMessage = message;
    res.status(404).end();
});

module.exports = app;