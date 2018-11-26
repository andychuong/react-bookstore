import React from 'react'
import Book from './Book'

const ListBooks = ({ items }) => {
  console.log(items)
  if(items.length > 0){
    return(
      <span>
        {items.map((x, y) => <Book id={y} key={y} book={x} />)}
      </span>
    )
  } else {
    return(
      <span></span>
    )
  }
}

export default ListBooks