import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";

const BookList = (props) => {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => (<Book key={book.id} book={book} />))}
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps)(BookList);
