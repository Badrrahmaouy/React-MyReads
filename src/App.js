import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ShelvesBox from './ShelvesBox'

const shelves = [
  {id: 'currentlyReading', name: 'Currently Reading'},
  {id: 'wantToRead', name: 'Want to Read'},
  {id: 'read', name: 'Read'} 
]

class App extends React.Component {
  state = { 
    books: [],
    searchBooks: []
   }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  search = query => {
    if (query !== '') {
      BooksAPI.search(query)
        .then(data => {
          data.error
          ? this.setState({ searchBooks: [] })
          : this.setState({ searchBooks: data })
        })
    }
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    if(shelf === 'none') {
      this.setState(state => ({
        books: state.books.filter(b => (
          b.id !== book.id
        ))
      }))
    } else {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => (
          b.id !== book.id
        )).concat(book)
      }))
    }
  }

  render() { 
    const { books, searchBooks } = this.state

    return (  
      <div className='app'>
        <Route exact path='/' render={() => (
          <ShelvesBox 
            shelves={shelves} 
            books={books} 
            moveBook={this.moveBook}
          />
        )} />
        <Route path='/search' render={({history}) => (
          <Search 
            books={books} 
            searchBooks={searchBooks} 
            search={this.search}
            moveBook={(book, shelf) => {
              this.moveBook(book, shelf)
              history.push('/')
            }} 
          />
        )} />
      </div>
    );
  }
}
 
export default App;