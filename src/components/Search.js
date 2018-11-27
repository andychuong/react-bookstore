import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div id="searchDiv">
        <form>
          <select value="Title">
            <option>Author</option>
            <option>Title</option>
          </select>
          <span>&nbsp;</span>
          <input type="text" placeholder="Search"></input>
        </form>
      </div>
    )
  }
}