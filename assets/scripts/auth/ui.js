'use strict'
const store = require('./../store')
const listItemEvents = require('../listItems/events')

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' Successfully signed in')
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
  $('.content').show()
  listItemEvents.onIndex()

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#add-listItem').show()
  clearMessage()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Successfully signed up')
  $('#sign-up').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onSignUpFailure = function (response) {
  $('#message').text('Could not sign up')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-password').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const clearMessage = () => {
  setTimeout(function () {
    $('#message').text('')
    $('#message').removeClass('failure')
    $('#message').removeClass('success')
  }, 5000)
}

const onSignOutSuccess = function () {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#add-listItem').trigger('reset')
  $('#add-listItem').hide()
  $('.content').hide()
  $('#message').text('Signed out successfully')
  store.user = null

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()

  $('#map').hide()
  $('#update-item').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#message').text('Error on sign out: ' + error.statusText)

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangeSuccess,
  onChangeFailure
}
