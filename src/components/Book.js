import React from 'react'

// Renders book items
const Book = ({ book, callback }) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-6">
          <a href={book.website} rel="noopener noreferrer" target="_blank"><h3>{book.title}</h3></a>
          <p>  "{book.subtitle}"</p>
          <h5>Author: {book.author}</h5>
          <br></br>
          <h5>Price: ${book.price}</h5>
          <form onSubmit={callback}>
            <input value="Add to cart" type='submit' />
          </form>
        </div>
        <div className="col-md-6">
          <h5>Description:</h5>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Book