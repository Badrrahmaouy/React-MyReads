import React from 'react'
import PropTypes from 'prop-types'
import Mover from './Mover'

const Book = props => {
  const { shelf, book, moveBook } = props

  return (
    <li className="book">
      <div className="book-top">
        <div 
          className="book-cover" 
          style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: book.imageLinks 
              ? `url(${book.imageLinks.thumbnail})`
              : ''
          }}
        ></div>
        <Mover shelf={shelf} book={book} moveBook={moveBook} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
    </li>
  )
} 

Book.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired
}

export default Book