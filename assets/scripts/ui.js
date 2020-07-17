'use strict'

const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Sign up Fail!')
}

module.exports = {

  signUpSuccess,
  signUpFailure
}
