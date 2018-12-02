import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchPage extends Component{
  state = {
    query: '',
    books: [],
    shelvedBooks: []
  }
  updateQuery = (query) => {
      if(query) {
          this.setState({ query })
          BooksAPI.search(query).then(result => {
              if (!result || result.error) {
                  this.setState({
                      books: []
                  })
              } else {

                  // Search Results
                  // eslint-disable-next-line
                  result.map((book) => {
                      book.shelf = 'none'
                      // eslint-disable-next-line
                      this.state.shelvedBooks.map((shelvedBook) => {
                          if(shelvedBook.id === book.id) {
                              book.shelf = shelvedBook.shelf
                          }
                      })
                  })
                  this.setState({books: result})
              }
          }).catch(error => {
              console.log(error)
          })
        } else {
          this.setState({
              query: '',
              books: []
          })
        }
  }

  render(){

    const {query, books} = this.state
    
    return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to='/' >Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(e) => this.updateQuery(e.target.value)} 
                  />

                </div>
              </div>
              <div className="search-books-results">
              <h2>{query !== '' ? `${books.length} Books Found!` : ``}</h2>
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book book={book} shelf={book.shelf}/>
                    ))}
                </ol>
              </div>
            </div>

            )
  }
}

export default SearchPage