import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, clickHandler } = props;
  const { id, title, category } = book;
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="submit"
          onClick={() => {
            removeBook(book);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
};

export default Book;
