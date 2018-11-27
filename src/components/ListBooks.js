import React from 'react'
import Book from './Book'

const ListBooks = ({ items, callback }) => {
  if(items.length > 0){
    return(
      <span>
        {items.map((x, y) => <Book id={y} key={y} book={x} callback={callback}/>)}
      </span>
    )
  } else {
    return(
      <span></span>
    )
  }
}

// class ListBooks () {

// }

export default ListBooks