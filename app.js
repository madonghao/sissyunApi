const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('./util/request')
const cache = require('apicache').middleware
const app = express()

// CORS & Preflight request
app.use((req, res, next) => {
  if(req.path !== '/' && !req.path.includes('.')){
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
})

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// cache
app.use(cache('2 minutes', ((req, res) => res.statusCode === 200)))

// static
app.use(express.static(path.join(__dirname, 'public')))

fs.readdirSync(path.join(__dirname, 'module')).reverse().forEach(file => {
  if (!file.endsWith('.js')) return
  let route = '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
  let question = require(path.join(__dirname, 'module', file))

  app.use(route, (req, res) => {
    let query = Object.assign({}, req.query, req.body, {cookie: req.headers.cookie})
    question(query, request)
      .then(answer => {
        console.log('[OK]', decodeURIComponent(req.originalUrl))
        // 判断请求URL是否是登陆
        if (req.originalUrl.includes('login')) {
          res.append('Set-Cookie', answer.body.result.accessToken)
        }
        res.status(answer.status).send(answer.body)
      })
      .catch(answer => {
        console.log('[ERR]', decodeURIComponent(req.originalUrl))
        res.status(answer.status).send(answer.body)
      })
  })
})

const port = process.env.PORT || 3000
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
    console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})

