const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const mapUi = require('../maps/ui')
const store = require('../store')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = function (event) {
  api.index()
    .then(ui.onIndexSuccess)
    .then(mapUi.makeMap)
    .catch(ui.onIndexFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const completed = !$(event.target).data('bool')
  const data = {
    listItem: {
      completed: completed
    }
  }

  api.update(id, data)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onUpdateBtn = function (event) {
  event.preventDefault()
  const id = store.toUpdateId
  const data = getFormFields(event.target)

  api.update(id, data)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onUpdateBtnSuccess)
    .catch(ui.onUpdateBtnFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(function () {
      onIndex(event)
    })
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const onUpdateAttempt = function (event) {
  store.toUpdateId = $(event.target).data('id')
}

const addHandlers = () => {
  $('#add-listItem').on('submit', onCreate)
  $('.content').on('click', '.remove-listItem', onDelete)
  $('#update-item').on('submit', onUpdateBtn)
  $('.content').on('click', '.updateBtn-listItem', onUpdateAttempt)
  $('.content').on('click', '.update-listItem', onUpdate)
  $('.content').on('click', '.completed', onUpdate)
  $('#add-listItem').hide()
  $('#clearit').on('click', () => { store.toUpdateId = null })
}

module.exports = {
  onCreate,
  onIndex,
  onUpdate,
  onUpdateBtn,
  onDelete,
  addHandlers
}
