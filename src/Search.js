import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'

class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  state = {  
    input: ''
  }

  handleChange = query => {
    this.setState(() => ({
      input: query
    }))
    
    this.props.search(query)
  }

  render() { 
    const { input } = this.state
    const { books, searchBooks, moveBook } = this.props

    return (  
      <div className="search-books">
        <div className="search-books-bar">
          <Link 
            className="close-search"
            to='/'
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={input}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <SearchResults 
            input={input}
            books={books}
            searchBooks={searchBooks}
            moveBook={moveBook}
          />
        </div>
      </div>
    );
  }
}
 
export default Search;