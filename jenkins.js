import Promise from 'bluebird'
import $ from 'jquery'

const JEKINS_TEST_ROOT = 'https://builds.apache.org'
let root = JEKINS_TEST_ROOT

export const changeRoot = (newRoot) => {
  root = newRoot
}
export const getAllViews = () => {
  return fetchJson(`${root}/api/json?tree=views[name,jobs[name]]`)
    .then(json => {
      const views = json.views.filter(view => {
        return view.name.contain('vy')
      })
      return Promsie.resolve(views)
    })
}

export const getAllPipelinesFromViews = () => {
  return getAllViews().then(views => {
    console.log(views);
    return Promsie.all(views)
  })
}

export const getAllCIFromPipeline = (pipelines) => {
  return getAllPipelinesFromViews()
}

export const getLatestBuildFromCI = (ci) => {
  return {
    name: '',
    lastBuildAuthor: '',
    lastBuildTime: '',
    status: false
  }
}

const fetchJson = (url) => {
  return $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    success: function( response ) {
      console.log(response);
    }
  })
}
