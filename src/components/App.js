import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks'
import ListCart from './ListCart'
import CartTotal from './CartTotal'
import Search from './Search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cart: [],
      renderedBooks: []
    }
  }

  // update rendered books based off form results from 'Search.js'
  updateSearch = (search, str) => {
    let newRender = []
    if(str.length > 0){
      let booksCopy = [...this.state.books]
      // Search by author
      if(search.toLowerCase() === 'author'){
        booksCopy.forEach(ele => {
          if (ele.author.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
            newRender.push(ele);
          }
        })
      }
      // Search by title
      if (search.toLowerCase() === 'title') {
          booksCopy.forEach(ele => {
            if (ele.title.toLowerCase()
                .trim()
              .indexOf(str.toLowerCase().trim()) !== -1) {
              newRender.push(ele);
            }
        })
      }
    } else {
      newRender = [...this.state.books];
    }
    // Update state
    this.setState({
      ...this.state,
      renderedBooks : newRender
    })
  }

  // Add an item to the cart
  onAddItem = (ev) => {
    ev.preventDefault();
    // Get the book title
    let bookTitle = ev.target.parentNode.childNodes[0].innerText;
    // Get the whole book object
    let myEle = {}
    for (let i = 0; i < this.state.books.length; i++) {
      if (bookTitle.trim() === this.state.books[i].title.trim()) {
        myEle = {...this.state.books[i]}
      }
    }
    // Add to cart
    let cartCopy = [...this.state.cart]
    // Search cart if it already exists
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].book.id === myEle.id) {
        let itemClone = { ...this.state.cart[i] }
        // Add to the quantity
        itemClone.quantity++;
        cartCopy[i] = itemClone
        // Set the state
        this.setState({
          ...this.state,
          cart: cartCopy
        })
        return true
      }
    }
    // Get the max id in cart
    const maxId = this.state.cart.reduce((acc, el) => Math.max(acc, el.id), 0)
    // Create a new cart item
    let newItem = {
      id: maxId + 1,
      book: myEle,
      quantity: 1
    }
    // Add to cart
    cartCopy.push(newItem)
    // Set the state
    this.setState({
      ...this.state,
      cart: cartCopy
    })
    return true
  }

  async componentDidMount() {
    // API call
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    // Set State
    if(this.state.books.length < 1){
      this.setState({renderedBooks:json})
    }
    this.setState({ books: json });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-dark bg-primary">
          <a className="navbar-brand" href="./index.html">React Book Store</a>
          <Search updateSearch={this.updateSearch}/> 
        </nav>

        <div className="container">
          {/* Search */}
          <br></br>
          {/* <Search books={this.state.cart} />  */}
          <div className="row">
            {/* Book List */}
            <div className="col-md-8">
              <h1>Books:</h1>
              <div id="all-books" className="list-group">
                <ListBooks items={this.state.renderedBooks} callback={this.onAddItem}/>
              </div>
            </div>
            {/* Cart */}
            
            <div className="col-md-4">
              <div className="fixed">
              <h1>Cart:</h1>  
              <div className="list-group-item">
                <div className="row">
                  <div className="col-2">
                    <h5>#</h5>
                  </div>
                  <div className="col-7">
                    <h5>Book</h5>
                  </div>
                  <div className="col-3">
                    <h5>Price</h5>
                  </div>
                </div>
                {/* Cart items */}
                <ListCart items={this.state.cart} />
              </div>
              <br></br>
              {/* Cart total price */}
              <CartTotal items={this.state.cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
