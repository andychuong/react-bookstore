import React from 'react'

const Book = ({ book }) => {
  let price = book.price + ''
  price = `$${price}`
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-5">{book.title}</div>
        <div className="col-md-5">{book.author}</div>
        <div className="col-md-2">{price}</div>
      </div>
    </div>
  )

}

export default Book