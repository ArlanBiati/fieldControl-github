const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

server.set('view engine', 'njk')

nunjucks.configure('src/view', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  return res.render('layout')
})

server.listen(5000, () => {
  console.log('Server is running')
})