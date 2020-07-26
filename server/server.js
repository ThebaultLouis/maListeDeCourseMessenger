require("./config/config")
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var _ = require('lodash')

var app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/policy', (req, res) => {
  res.send("Wollah on stocke rien")
})

// WebHook
const webhook = require('./routes/webhook')

app.use('/webhook', webhook)


// Server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Started in port ${process.env.PORT}`)
})

module.exports.app = app