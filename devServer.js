const { setActive } = require('./src/state')
module.exports = function (app, server, compiler) {
  app.get('/start', function (req, res) {
    const name = req.query.name
    res.send('')
    setActive(name)
  })
}
