import path from 'path'
import express from 'express'
import morgan from 'morgan'

import app from './base-server'
import jenkins from './jenkins'

app.use('/', express.static(path.join(__dirname, './public')))

// error handlers
// catch 404 and forwarding to error handler
app.use((err, req, res, next) => {
  err = err || new Error('Not Found')
  !res.statusCode && res.status(404)
  next(err)
})

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'production') {
  app
  .use(morgan('combined', {
    skip: (req, res) => {
      return res.statusCode < 400
    },
    stream: logger(path.join(__dirname, '/error.log'))
  }))
  .use(morgan('combined', {
    skip: (req, res) => {
      return res.statusCode >= 400
    },
    stream: logger(path.join(__dirname, '/access.log'))
  }))
} else {
  app
  .use((err, req, res, next) => {
    next(err)
  })
  .use(morgan('dev'))
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  let code
  if (err) {
    code = err.code || 500
  } else if (req.errors) {
    code = (req.errors && req.errors.length) ? Math.max(req.errors.map((error) => {
      return error.code
    })) : req.errors.code
  } else {
    return next()
  }
  res.status(code || res.statusCode || 500).send({
    errors: req.errors
  })

  next(err)
})


const server = require(config.get('protocol') || 'http').createServer()
const application = express()
app.set('port', process.env.PORT || config.get('port') || 3000)

server.on('request', application)
server.listen(
  app.get('port'),
  () => console.log('server start listening on ' + app.get('port'))
)
