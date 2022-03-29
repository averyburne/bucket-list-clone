'use strict'
const authEvents = require('./auth/events')
const listEvents = require('./listItems/events')
const dark = require('./dark-mode-switch.min.js')

$(() => {
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
  authEvents.addHandlers()
  listEvents.addHandlers()
  $('#map').hide()
  $('#darkSwitch').on('click', function () {
   if ($('#darkSwitch').prop("checked") == true) {
     document.body.setAttribute("data-theme", "dark")
   } else {
     document.body.setAttribute("data-theme", "light")
   }
  })
})
