import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = props => {
  const { shelf, books } = props
  const filteredBooks = books.filter(b => (
    b.shelf === shelf.id
  ))

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            filteredBooks.map(book => (
              <Book 
                key={book.id} 
                shelf={shelf.id} 
                book={book} 
                moveBook={props.moveBook} 
              />
            ))
          }
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
}

export default Shelf