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
          {bookList.map((book) => (
            <Book key={book.id} book={book}/>
          ))}
        </tbody>
      </table>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: id => dispatch(removeBook(id)),
});

const mapStateToProps = (state) => ({
  bookList: state.books,
});

BookList.propTypes = {
  book: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
