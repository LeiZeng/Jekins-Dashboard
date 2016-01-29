import $ from 'jquery'
import itemTmp from './hbs/item.hbs'
import mock from './mock.json'
import warn from './warn'

let warnningHandler

$.fn.circle3d = function(list) {
  const fullWidth = global.innerWidth
  const radius = fullWidth * 0.4
  const $this = this
  const $circle = $this.find('.site-circle')
  const prioritizedList = prioritizeList(list || mock)
  const $items = prioritizedList.map(itemTmp)

  $circle.append($items)

  $this.css({
    perspective: fullWidth + 'px'
  })
  $circle.find('.site-item')
  .each((index, item) => {
    const $item = $(item)
    $item.find('.background, .site-item-wrap')
      .css({
        backgroundImage: 'url(' + prioritizedList[index].logo + ')'
      })
    return $item.css({
      transform: ('rotateY('
        + getAngle(index, $items.length)
        + 'deg) translateZ('
        + radius
        + 'px)'),
      width: getLengthOfItems($items.length, radius),
      height: getLengthOfItems($items.length, radius)
    })
  })

  // if (warnningHandler) {
  //   clearInterval(warnningHandler)
  // }
  // setInterval(() => {
    warn(prioritizedList[0].lastBuildAuthor, prioritizedList[0].name)
  // }, 30)
}

const getAngle = (index, length) => {
  return index * 360 / length
}
const getLengthOfItems = (n, r) => {
  const maxLen = r
  const len = 2 * Math.PI * r / n * 0.9

  return maxLen > len ? len : maxLen
}
const prioritizeList = (list) => {
  let failedCount = 0
  const sortedList = list.reduce((result, item) => {
      if (item.status) {
        failedCount += 1
        result.unshift(item)
      } else {
        result.push(item)
      }
      return result
    }, [])
    // console.log(list, sortedList);
  return sortedList.concat(sortedList.splice(0, Math.floor(failedCount/2)))
}
