import $ from 'jquery'
import _ from 'handlebars'

import appTmp from './hbs/app.hbs'
const appData = {
  name: 'Taiyu',
  people: [{
    user: 'Ziyi',
    img: ''
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  }]
}
const app = appTmp(appData)

$('#app').append(app)
