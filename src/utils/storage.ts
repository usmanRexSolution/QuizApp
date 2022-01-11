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

export async function getCart() {
  const user = await getUserData()
  const userData = user == null ? '' : user.id
  const cartData = 'cart' + userData

  // await AsyncStorage.removeItem('cart');
  let cartString = await AsyncStorage.getItem(cartData)
  let cart = JSON.parse(cartString)
  if (cart == null) {
    cart = []
  }
  return cart
}

export async function updateCart(productId, quantity) {
  const user = await getUserData()
  const userData = user == null ? '' : user.id
  const cartData = 'cart' + userData
  var item = {
    productId: productId,
    quantity: quantity,
  }
  let cartString = await AsyncStorage.getItem(cartData)
  let cart = JSON.parse(cartString)
  if (cart == null) {
    var newCart = []
    newCart.push(item)
    await AsyncStorage.setItem(cartData, JSON.stringify(newCart))
    return newCart
  } else {
    var isExist = false
    var isRemove = false
    var index = 0
    for (var i = 0; i < cart.length; i++) {
      if (cart[i]['productId'] == productId) {
        // if (Number(quantity) == 0) {
        //   var isRemove = true;
        //   index = i - 1;
        // } else {
        cart[i]['quantity'] = quantity
        isExist = true
        // }
      }
    }
    if (!isExist) {
      cart.push(item)
    }
    // if (isRemove) {
    //   alert(i);
    //   cart.splice(index, 1);
    // }
    // console.log(' _ _ _ __ _ _ _  ', cart)
    await AsyncStorage.removeItem(cartData)
    await AsyncStorage.setItem(cartData, JSON.stringify(cart))
    return cart
  }
}

export async function removeItem(productId) {
  const user = await getUserData()
  const userData = user == null ? '' : user.id
  const cartData = 'cart' + userData
  let cartString = await AsyncStorage.getItem(cartData)
  let cart = JSON.parse(cartString)
  var newCart = []
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['productId'] != productId) {
      newCart.push(cart[i])
    }
  }

  await AsyncStorage.removeItem(cartData)
  await AsyncStorage.setItem(cartData, JSON.stringify(newCart))
  return newCart
}
