import $ from 'jquery'

import appTmp from './hbs/app.hbs'
const appData = {
  name: 'Taiyu',
  people: [{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  },{
    user: 'Ziyi'
  }]
}
const app = appTmp(appData)

$('#app').append(app)
