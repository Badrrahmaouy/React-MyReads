import React from 'react'
import PropTypes from 'prop-types'

class Mover extends React.Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
  }
  
  state = {
    shelf: this.props.shelf
  }

  handleChange = event => {
    const newShelf = event.target.value
    this.setState(() => ({
      shelf: newShelf
    }))
    
    this.props.moveBook(this.props.book, newShelf)
  }

  render() { 
    const { shelf } = this.state

    return (  
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
 
export default Mover;
