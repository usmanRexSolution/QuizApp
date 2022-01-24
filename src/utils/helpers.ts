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



export function removeFromArray(arr, value) {
  return arr.filter(function (ele) {
    return ele != value
  })
}




