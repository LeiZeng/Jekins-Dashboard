import 'babel-polyfill'
import 'isomorphic-fetch'
import $ from 'jquery'
import './circle'
import appTmp from './hbs/app.hbs'

const app = appTmp()

const $app = $('#app').append(app)
$app.find('.circle-container').circle3d()
