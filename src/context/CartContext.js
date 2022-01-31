import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  clearCartList: () => {},
  onDecrementQuantity: () => {},
  onIncrementQuantity: () => {},
  checkOut: () => {},
})

export default CartContext
