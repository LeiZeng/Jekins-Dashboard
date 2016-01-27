import $ from 'jquery'

import appTmp from './hbs/app.hbs'
const duplicate = (num, obj) => {
  const result = []
  let i = 0
  for (; i < num; i++) {
    result.push(Object.assign({}, obj))
  };
  return result
}
const siteData = {
  name: 'GIO',
  lastBuildAuthor:'Ziyi',
  lastBuildTime:'2016/01/28',
  status:'pass'
}
const appData = {
  name: 'Taiyu',
  site: duplicate(9, siteData)
}
const app = appTmp(appData)

$('#app').append(app)
