import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

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

    if (filter !== 'CATEGORIES') {
      filterBooks = bookList.filter(book => book.category === filter);
    }

    return (
      <div className="wrapper">
        <div className="nav-bar">
          <div className="nav-logo">
            <span className="logo">Bookstore CMS</span>
          </div>
          <div className="nav-list">
            <ul className="nav-list-items">
              <li className="list-item">BOOKS</li>
              <li className="list-item">
                <CategoryFilter
                  onChange={this.handleFilterChange}
                />
              </li>
            </ul>
          </div>
          <div className="nav-buttons">
            <img alt="profilebutton" className="profile-button" src="profile.png" />
          </div>
        </div>
        {filterBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            clickHandler={this.handleRemoveBook}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = state => ({
  bookList: state.books,
  filter: state.filter,
});

BookList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
};

BookList.defaultProps = {
  filter: 'CATEGORIES',
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
