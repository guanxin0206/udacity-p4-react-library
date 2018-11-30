import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component{
  state = {
    shelf: ''
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string,
    //onChangeShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string,
  }

  handleChange = (event) => {
    this.setState({shelf: event.target.value});
  }

  

  render(){
    const title = this.props.title;
    const author = this.props.author;
    const cover = this.props.backgroundImage;
    const shelf = this.props.shelf;

    return(
           <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.props.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{author}</div>
            </div>)
  }
}

export default Book
