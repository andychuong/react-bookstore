import React from 'react'
import Cart from './Cart'

const ListCart = ({ items }) => {
  console.log(items)
  if (items.length > 0) {
    return (
      <span>{items.map((x, y) => <Cart id={y} key={y} item={x} />)}</span>   
    )
  } else {
    return (
      <span></span>
    )
  }
}

export default ListCart