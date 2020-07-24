import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";
import PropTypes from "prop-types";
import Book from "../components/Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(book) {
    this.props.bookRemove(book);
  }

  render() {
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {this.props.books.map((book) => (
          <Book key={book.id} book={book} removeBook={this.handleRemove(book)} />
        ))}
      </table>
    );
  }
};

BookList.propTypes = {
  books: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookRemove: (book) => {
      dispatch(removeBook(book))
    }
  }
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
