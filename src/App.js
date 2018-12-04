import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
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
        <Route exact path="/search" render={()=>(<SearchPage books={this.state.books}/>)} />
        <Route exact path="/" render={()=> <ListBooks books={this.state.books} showAll={this.showAll()}/> } />

      </div>
    )
  }
}

export default BooksApp
