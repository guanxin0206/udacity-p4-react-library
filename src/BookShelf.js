import React,{Component} from 'react'

class BookShelf extends Component{
  state = {
    title: ''
  }
  render(){
    return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li> </li>
                      <li> </li>
                    </ol>
                  </div>
                </div>
              </div>
            )
  }
}