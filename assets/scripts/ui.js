'use strict'

const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Sign up Fail!')
}
const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  // console.log(store)
  store.user = response.user
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function () {
  $('#message').text('Sign in Fail, Please Try Again!')
}
const changePasswordSuccess = function () {
  $('#message').text('Password has been Changed.')
}
const changePasswordFailure = function () {
  $('#message').text('Failed to Change Password.')
}
const signOutSuccess = function () {
  $('#message').text('Sign out Success.')
  $('#authenticated').hide()
  $('#unauthenticated').show()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Sign out Failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
