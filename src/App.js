import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  showAll(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })

    })
  }
  componentDidMount(){
    this.showAll()
  }

  

  render(){

    // console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/search" render={()=>(<SearchPage />)} />
        <Route exact path="/" render={()=> <ListBooks books={this.state.books} showAll={this.showAll()}/> } />

      </div>
    )
  }
}

export default BooksApp
