import React,{Component} from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class Book extends Component{
  static propTypes = {
    book: propTypes.object.isRequired,
    title: propTypes.string,
    authors: propTypes.array,
    cover: propTypes.string,
    //onChangeShelf: propTypes.func.isRequired,
    shelf: propTypes.string
  }

  changeShelf = (book, currentShelf) => {
    BooksAPI.update(book, currentShelf).then(()=>{
      book.shelf = currentShelf;
      this.showAll()})
  }

  showAll = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  render(){
    const thisBook = this.props.book;
    var cover;
    if(this.props.backgroundImage){
      cover = this.props.backgroundImage;
    }
    else{
      cover = thisBook.imageLinks ? thisBook.imageLinks.thumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
    }

    const title = thisBook.title ? thisBook.title : "Default title"
    const authors = thisBook.authors ? thisBook.author: "Default authors"
    
    
    
    

    return(
           <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                <div className="book-shelf-changer">
                  <select value={thisBook.shelf ? thisBook.shelf : 'None'} onChange={(e) => {this.changeShelf(thisBook, e.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors}</div>
            </div>)
  }
}

export default Book
