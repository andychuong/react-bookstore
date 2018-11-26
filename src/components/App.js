import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks'
import ListCart from './ListCart'
import CartTotal from './CartTotal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cart: [
        {
          id: 1,
          book: {
            "title": "Eloquent JavaScript, Second Edition",
            "subtitle": "A Modern Introduction to Programming",
            "author": "Marijn Haverbeke",
            "published": "2014-12-14T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 472,
            "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website": "http://eloquentjavascript.net/",
            "inCart": false,
            "price": 5,
            "id": 1
          },
          quantity: 1
        },
        {
          id: 2,
          book: {
            "title": "Learning JavaScript Design Patterns",
            "subtitle": "A JavaScript and jQuery Developer's Guide",
            "author": "Addy Osmani",
            "published": "2012-07-01T00:00:00.000Z",
            "publisher": "O'Reilly Media",
            "pages": 254,
            "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
            "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
            "inCart": false,
            "price": 5,
            "id": 2
          },
          quantity: 5
        }
      ]
    }
  }

  onAddItem = (ev) => {
    ev.preventDefault();
    
    let bookTitle = ev.target.parentNode.childNodes[0].innerText;
    let myEle = {}
    for (let i = 0; i < this.state.books.length; i++) {
      if (bookTitle.trim() === this.state.books[i].title.trim()) {
        myEle = {...this.state.books[i]}
      }
    }
    // console.log(myEle.id)
    // Add to cart
    let cartCopy = [...this.state.cart]
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].book.id == myEle.id) {
        let itemClone = { ...this.state.cart[i] }
        console.log(itemClone.quantity)
        itemClone.quantity++;
        cartCopy[i] = itemClone
        this.setState({
          ...this.state,
          cart: cartCopy
        })
        return true
      }
    }
    const maxId = this.state.cart.reduce((acc, el) => Math.max(acc, el.id), 0)
    let newItem = {
      id: maxId + 1,
      book: myEle,
      quantity: 1
    }
    cartCopy.push(newItem)
    this.setState({
      ...this.state,
      cart: cartCopy
    })
    return true
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({ books: json });
    // console.log(json);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="./index.html">React Book Store</a>
        </nav>

        <div className="container">
          {/* Search */}
          <div className="row">
            {/* Book List */}
            <div className="col-md-8">
              <h1>All Books:</h1>
              <div id="all-books" className="list-group">
                <ListBooks items={this.state.books} callback={this.onAddItem}/>
              </div>
            </div>
            {/* Cart */}
            
            <div className="col-md-4">
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
                {/* <span>_____________________________________________</span> */}
                <ListCart items={this.state.cart} />
              </div>
              <CartTotal items={this.state.cart} />
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default App;
