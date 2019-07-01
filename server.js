const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded())

app.get('/', function(req, res) {
  let path = __dirname + '/index.html'
  res.sendFile(path)
});

app.listen(process.env.PORT || 8080)
