import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks'

class App extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({ books: json });
    console.log(json);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="./index.html">React Book Store</a>
        </nav>

        <div className="container">
          <h1>All Books</h1>
          <div id="all-books" className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-5">Title</div>
                <div className="col-md-5">Author</div>
                <div className="col-md-2">Price</div>
              </div>
            </div>
            {/* Items go here */}   
            <ListBooks items={this.state.books} />
          </div>

        </div>

      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
