const mapThing = require('../templates/map.handlebars')

const makeMap = function () {
  const showMapHTML = mapThing()
  $('#map-script').html(showMapHTML)
}

module.exports = {
  makeMap
}
