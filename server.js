require('babel-register')
require('babel-polyfill')
require('isomorphic-fetch')
var jenkins = require('./jenkins')

jenkins.getAllCIFromPipeline()
.then(function(json) {
  console.log(json);
})
.catch(function(err) {
  console.log(err);
})
