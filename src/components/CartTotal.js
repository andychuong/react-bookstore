import React from 'react'

export default class Total extends React.Component {
  render() {
    let total = 0
    // Calculate total
    this.props.items.forEach(item => {
      total += item.book.price * item.quantity
    })
    // Format total into a string
    total = total + ''
    let price = `$${total}`
    // Send JSX
    return (
      <div>
        Cart Total = {price}
      </div>
    )
  }
}