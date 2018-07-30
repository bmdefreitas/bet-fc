module.exports = app => {

  app.get('/api', (req, res) => res.json({ api: 'Garage API with NodeJS'}));
}