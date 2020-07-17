'use strict'

const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Sign up Fail!')
}

const signInSuccess = function () {
  $('#message').text('Successfully signed in!')
}
const signInFailure = function () {
  $('#message').text('Sign in Fail, Please Try Again!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
