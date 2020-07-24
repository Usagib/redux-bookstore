import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";
import PropTypes from "prop-types";
import Book from "../components/Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book.id);
  }

  render() {
    const { books } = this.props;
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => (
          <Book key={book.id} book={book} removeBook={this.handleRemoveBook(book)} />
        ))};
      </table>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: id => dispatch(removeBook(id)),
});

const mapStateToProps = (state) => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
