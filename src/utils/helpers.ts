import AsyncStorage from '@react-native-async-storage/async-storage'
// import StringsOfLanguage from '../assets/localization/Strings'
import { getDataFromStorage } from './storage'

export function filterArrayWithValue(value, array) {
  array = array.filter(item => item.id !== value)
  return array
}

export async function verifySession() {
  let data = getDataFromStorage('language')
  var nav = 'OnBoarding'
  if (data != null) {
    // StringsOfLanguage.setLanguage(data == 'Germany' ? 'de' : 'en')
    nav = 'OnBoarding'
  }
  return nav
}

export async function verifyAuth() {
  let data = getDataFromStorage('auth')
  var nav = 'OnlineOrders'
  if (data == null) {
    nav = 'Login'
  }
  return nav
}

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export function getDate(dateTime) {
  var date = new Date(dateTime)
  var year = date.getFullYear()
  var months = date.getMonth()
  var day = date.getDate()
  var time = date.getTime()
  var updateTime = new Date(time * 1000)
  var hours = updateTime.getHours()
  var minutes = "0" + updateTime.getMinutes()
  var formattedTime = hours + ':' + minutes.substr(-2)
  const formattedDate =
    day + ' / ' + months + ' / ' + year + ' : ' + formattedTime
  return formattedDate
}

export function removeFromArray(arr, value) {
  return arr.filter(function (ele) {
    return ele != value
  })
}

export function dicountType(type) {
  if (type == 'percentage') {
    return '%'
  }
  else {
    return global.currency
  }
}

export function dicountPrice(amount, discount, discountType) {
  if (discountType == 'percentage') {
    return (amount - (amount / 100) * discount + ' ') + global.currency
  }
  else {
    return amount - discount + ' ' + global.currency
  }
}
