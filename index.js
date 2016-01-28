import 'babel-polyfill'
import 'isomorphic-fetch'
import $ from 'jquery'
import './circle'
import appTmp from './hbs/app.hbs'
// import { getAllCIFromPipeline } from './jenkins'

const app = appTmp()
// getAllCIFromPipeline()

const $app = $('#app').append(app)
$app.find('.circle-container').circle3d()
