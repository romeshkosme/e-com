import {useEffect, useState} from 'react'
import useLocalStorage from './useLocalStorage'

export default function useCart(cartItem) {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', cartItem)

  useEffect(() => {
    setCartItems(cartItems)
  }, [cartItems])

  return [cartItems, setCartItems]
}