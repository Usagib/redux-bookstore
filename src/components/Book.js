import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, clickHandler } = props;
  const { title, category } = book;
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <div className="lesson-description">
      <p className="lesson-description-category">{category}</p>
      <p className="lesson-description-title">{title}</p>
      <ul className="lesson-description-links">
        <li className="lesson-link">
          <button
            type="submit"
            className="btn-remove"
            onClick={() => {
              removeBook(book);
            }}
          >
            Remove
        </button>
        </li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
