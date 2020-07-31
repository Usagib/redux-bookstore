import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { bookList, filter } = this.props;
    let filterBooks = bookList;

    if (filter !== 'All') {
      filterBooks = bookList.filter(book => {
        return (book.category === filter);
      });
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filterBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                clickHandler={this.handleRemoveBook}
              />
            ))}
          </tbody>
        </table>
        <CategoryFilter
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const mapStateToProps = (state) => ({
  bookList: state.books,
  filter: state.filter,
});

BookList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
};

BookList.defaultProps = {
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
