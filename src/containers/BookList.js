import React from "react";
import { connect } from "react-redux";
import { removeBook, changeFilter } from "../actions/index";
import PropTypes from "prop-types";
import Book from "../components/Book";
import CategoryFilter from './CategoryFilter';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { bookList, filter } = this.props;
    let filterBooks = bookList;
    if (filter !== 'All') {
      filterBooks = bookList.filter(book => book.category === filter);
    }
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
          {filterBooks.map((book) => (
            <Book key={book.id} book={book} clickHandler={this.handleRemoveBook} />
          ))}
        </tbody>
        <h4>Filter:</h4>
        <CategoryFilter onChange={this.handleFilterChange} />
      </table>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = (state) => ({
  bookList: state.books,
  filter: state.filter,
});

BookList.propTypes = {
  book: PropTypes.object,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

BookList.defaultProps = {
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
