import React from "react";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";
import Book from "../components/Book";
import CategoryFilter from "../components/CategoryFilter";

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
          {bookList.map((book) => (
            <Book
              key={book.id}
              book={book}
              clickHandler={this.handleRemoveBook}
            />
          ))}
          <h4>Filter:</h4>
          <CategoryFilter
            handleFilterChange={handleFilterChange}
          />
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

const mapStateToProps = (state) => ({
  bookList: state.books,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
