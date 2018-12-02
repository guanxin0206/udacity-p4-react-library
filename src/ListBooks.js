import React,{Component} from 'react'
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

class ListBooks extends Component{
	state = {}
	static propTypes = {
		books: propTypes.array.isRequired
	}
	
	render(){
		return (
			<div>
				<div className="list-books"></div>
				
				<div className="list-books-title">
				<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf title='Currently Reading' books={this.props.books}/>
						<BookShelf title='Want to Read' books={this.props.books}/>
						<BookShelf title='Read' books={this.props.books}/>
					</div>
				</div>

				<div className="open-search"> 
              		<Link to='/search' >Add a book</Link>
          		</div>   
			</div>
			
			
			
		)
	}
}

export default ListBooks