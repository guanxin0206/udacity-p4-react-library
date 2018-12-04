import React from 'react'
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

function ListBooks(props){
	return (
			<div>
				<div className="list-books"></div>
				
				<div className="list-books-title">
				<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf title='Currently Reading' books={props.books}/>
						<BookShelf title='Want to Read' books={props.books}/>
						<BookShelf title='Read' books={props.books}/>
					</div>
				</div>

				<div className="open-search"> 
              		<Link to='/search' >Add a book</Link>
          		</div>   
			</div>	

		)

}

ListBooks.propTypes = {
	books: propTypes.array
}

export default ListBooks