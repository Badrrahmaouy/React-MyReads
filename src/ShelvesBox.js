import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

const ShelvesBox = props => {
  const { shelves, books, moveBook } = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {
          shelves.map(shelf => (
            <Shelf key={shelf.id} shelf={shelf} books={books} moveBook={moveBook} />
          ))
        }
      </div>
        <Link 
          className="open-search"
          to='/search' 
        >
          Add a book
        </Link>
    </div>
  )
}

ShelvesBox.propTypes ={
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
}

export default ShelvesBox