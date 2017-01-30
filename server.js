var express = require('express')
var app = express()
const port = 3000

var middleware = require('./middleware')

// app.use(middleware.requireAuthentication)
//
app.use(middleware.logger)

// about
app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us!')
})

app.use(express.static(__dirname + '/public'))

app.listen(port, function () {
  console.log('express server started on port ' + port)
})
