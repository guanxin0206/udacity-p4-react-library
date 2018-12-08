import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchPage extends Component{
  state = {
    query: '',
    books: []
  }

// this.setState((prevState, props) =>{
//     const shelfBooks = props.books;

//     const newSearchBooks = searchBooks.map(searchBook=> {
//        const  
//     });

// })

  updateQuery = (query) => {

    // 用shelvedBooks 常态变量，之后做比较
      const shelvedBooks = this.props.books;
      if(query) {          
          this.setState({ query })
          BooksAPI.search(query).then(result => {
              if (!result || result.error) {
                  this.setState({
                      books: []
                  })
              } else {
                  // Search Results
                  
                //   console.log(result)
                // eslint-disable-next-line
                  result.map((book) => {
                       book.shelf = 'none'
                      // eslint-disable-next-line
                      shelvedBooks.map((shelvedBook) => {
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
    // console.log("Props Books:")
    // console.log(this.props.books)
    // console.log("shelvedBooks:")
    // console.log(this.state.shelvedBooks)

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
                  
                    {books.map((book, index) => (
                      <Book key={index} book={book} shelf={book.shelf}/>
                    ))}
                  </ol>
              </div>
            </div>

            )
  }
}

export default SearchPage