import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { bookList } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(book => (
            <Book
              key={book.id}
              book={book}
              clickHandler={this.handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

const mapStateToProps = state => ({
  bookList: state.books,
});

BookList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
