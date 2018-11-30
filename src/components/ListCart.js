import React from 'react'
import Cart from './Cart'

const ListCart = ({ items }) => {
  if (items.length > 0) {
    return (
      // Mapped cart items
      <span>{items.map((x, y) => <Cart id={y} key={y} item={x} />)}</span>   
    )
  } else {
    return (
      // Empty cart
      <span>Your cart is empty, you should add some books!</span>
    )
  }
}

export default ListCart