import React from 'react'

export default class Total extends React.Component {
  render() {
    let total = 0
    this.props.items.forEach(item => {
      total += item.book.price * item.quantity
    })
    total = total + ''
    let price = `$${total}`
    return (
      <div>
        Cart Total = {price}
      </div>
    )
  }
}