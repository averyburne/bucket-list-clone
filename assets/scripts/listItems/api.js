'use strict'
const config = require('../config')
const store = require('../store')

const create = data => {
  return $.ajax({
    url: config.apiUrl + '/listItems',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/listItems',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const update = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/listItems/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroy = id => {
  return $.ajax({
    url: config.apiUrl + '/listItems/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  create,
  index,
  update,
  destroy
}
