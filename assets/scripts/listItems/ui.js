'use strict'
const showListItemsTemplate = require('../templates/listItem.handlebars')

const onCreateSuccess = function () {
  $('#message').text('Successfully added a list item to your bucket')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#add-listItem').trigger('reset')
  clearMessage()
}

const onCreateFailure = function () {
  $('#message').text('Could not add list item to bucket')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onIndexSuccess = function (data) {
  const showListItemsHtml = showListItemsTemplate({ listItems: data.listItem })
  $('.content').html(showListItemsHtml)
  if (data.listItem.length === 0) {
    $('#message').text("You don't have any list Items!")
  }

  const pointers = []
  for (let i = 0; i < data.listItem.length; i++) {
    if (data.listItem[i].lat !== null && data.listItem[i].lng !== null) {
      if (data.listItem[i].lat !== undefined && data.listItem[i].lng !== undefined) {
        pointers.push({ lat: data.listItem[i].lat, lng: data.listItem[i].lng })
      }
    }
  }

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()

  $('#map-info').val({ pointers: pointers })

  $('#map').show()
}

const onIndexFailure = function () {
  $('#message').addClass('failure')
  $('#message').text('Could not get list items')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onDeleteSuccess = function () {
  $('#message').text('Deleted the list item')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onDeleteFailure = function () {
  $('#message').text('Could not delete list item')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onUpdateSuccess = function () {
  $('#message').text('Successfully updated list item')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onUpdateFailure = function () {
  $('#message').text('Could not update list item')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
  clearMessage()
}

const onUpdateBtnSuccess = function () {
  $('#message2').text('Successfully updated list item')

  $('#message2').removeClass('failure')
  $('#message2').addClass('success')
  clearMessage2()
  $('#update-item').trigger('reset')
}

const onUpdateBtnFailure = function () {
  $('#message2').text('Could not update list item')

  $('#message2').removeClass('success')
  $('#message2').addClass('failure')
  clearMessage2()
}

const onClearSuccess = function () {
  $('#message').text('Cleared list items!')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  clearMessage()
}

const onClearFailure = function () {
  $('#message').text('Failed to clear list items!')
}

const clearMessage = function () {
  setTimeout(function () {
    $('#message').text('')
    $('#message').removeClass('failure')
    $('#message').removeClass('success')
  }, 5000)
}

const clearMessage2 = function () {
  setTimeout(function () {
    $('#message2').text('')
    $('#message2').removeClass('failure')
    $('#message2').removeClass('success')
  }, 5000)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onUpdateBtnSuccess,
  onUpdateBtnFailure,
  onClearSuccess,
  onClearFailure
}
