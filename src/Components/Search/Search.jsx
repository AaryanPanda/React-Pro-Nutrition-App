/* eslint-disable react/prop-types */
import { Component } from 'react'
import "./Search.css"

export default class Search extends Component {
  render() {
    return (
    <div id='search'>
        <h1>Search</h1>
        <input id='searchbox' type='text' placeholder='Food name...' onChange={(e)=>this.props.handleSearch(e.target.value)}/>

    </div>
    )
  }
}