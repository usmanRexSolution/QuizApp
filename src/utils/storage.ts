import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserData } from '../networking/AuthApiService'

export const storeDataToStorage = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const getDataFromStorage = async (value: any) => {
  let data = await AsyncStorage.getItem(value)
  let newData = JSON.parse(data)
  return newData
}

