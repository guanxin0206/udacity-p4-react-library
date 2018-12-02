import React,{Component} from 'react'
import Book from './Book'
import propTypes from 'prop-types';

const shelf_mapping = {
    'Read' : 'read',
    'Currently Reading' : 'currentlyReading',
    'Want to Read' : 'wantToRead'
  }


class BookShelf extends Component{
  state = {
    
  }

  static propTypes = {
    title: propTypes.string.isRequired,
    books: propTypes.array.isRequired
  }

  
  render(){
    const bookshelf_title = this.props.title;
    const books = this.props.books;
    
    
    return (
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{bookshelf_title}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {// loop push to container and , return container
                        }

                        {books.filter( (thisBook)=>thisBook.shelf === shelf_mapping[bookshelf_title]).
                              map((thisBook, index)=>
                                <li key={index}><Book book={thisBook} 
                                            title={thisBook.title} 
                                            authors={thisBook.authors} 
                                            shelf={thisBook.shelf} 
                                            backgroundImage={thisBook.imageLinks.thumbnail}/> 
                                </li>
                                )
                        }
                        
                         
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            )
  }
}

export default BookShelf