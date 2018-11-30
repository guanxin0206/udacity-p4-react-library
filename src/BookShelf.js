import React,{Component} from 'react'
import Book from './Book'


class BookShelf extends Component{
  state = {
    bookshelf_title: 'Testing',
    books: []
    
  }

componentDidMount(){
  this.setState({
    books: this.props.books
  });

  this.setState(
    {bookshelf_title: this.props.title}
  )
}

  render(){
    console.log(this.props.books)

    return (
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.state.bookshelf_title}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {// loop push to container and , return container
                        }

                        {this.props.books.map((book, index)=>
                          <li key={index}><Book title={book.title} author={book.author}/>  </li>

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