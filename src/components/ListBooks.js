import React from 'react'
import Book from './Book'

const ListBooks = ({ items }) => {
  console.log(items)
  if(items.length > 0){
    return(
      <ul>
        {items.map((x, y) => <Book id={y} key={y} book={x} />)}
      </ul>
    )
  } else {
    return(
      <span></span>
    )
  }
}

export default ListBooks