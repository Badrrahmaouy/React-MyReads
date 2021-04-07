import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const SearchResults = props => {
  const { input, books, searchBooks, moveBook } = props
  const booksOnShelf = searchBooks.map(searchBook => {
    books.map(book => {
      if(book.id === searchBook.id) {
        searchBook.shelf = book.shelf
      }
      return book
    })
    return searchBook
  })

  return (
    <ol className="books-grid">
      {
        input.length > 0 ?
          (searchBooks.length > 0
            ? booksOnShelf.map(book => (
              <Book 
                key={book.id} 
                book={book} 
                moveBook={moveBook}
                shelf={book.shelf ? book.shelf : 'none'}
              />
            ))
            : <p>No books found</p>
          ) : (
            <h2>Type something to start your search</h2>
          )
          }
    </ol>
  )
}

SearchResults.propTypes = {
  input: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  searchBooks: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
}

export default SearchResults
