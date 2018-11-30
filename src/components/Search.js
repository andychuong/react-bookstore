import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: 'Author',
      searchTerm: ''
    }
  }

  // Change between 'Author' or ' Title'
  onTypeChange = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      searchType: e.target.value
    })
    this.props.updateSearch( this.state.searchType, this.state.searchTerm )
  }
  // Update this.state.searchTerm from input field
  onTermChange = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    })
    this.props.updateSearch ( this.state.searchType, this.state.searchTerm )
  }
  // Render search box
  render() {
    return (
      <div id="searchDiv">
        <form>
        {/* Type */}
          <select id='searchType' placeholder="Title" onChange={this.onTypeChange}>
            <option>Author</option>
            <option>Title</option>
          </select>
          <span>&nbsp;</span>
          <input id='searchTerm' type="text" placeholder="Search" onChange={this.onTermChange} onSubmit={this.onTermChange}></input>
        </form>
      </div>
    )
  }
}