import React from 'react'

const Cart = ({ item }) => {
  return (
    <div className="row">
      <div className="col-2">
        <p>{item.quantity}</p>
      </div>
      <div className="col-8">
        <h6>{item.book.title}</h6>
      </div>
      <div className="col-2">
        <p>${item.book.price}</p>
      </div>
    </div>
  )

}

export default Cart