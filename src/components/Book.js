import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, clickHandler } = props;
  const { id, title, category } = book;
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <div className="lesson-panel">
      <div className="lesson-description">
        <p className="lesson-description-category">{category}</p>
        <p className="lesson-description-title">{title}</p>
        <p className="lesson-description-author">Unknown Author</p>
        <ul className="lesson-description-links">
          <li className="lesson-link">Comments</li>
          <li className="lesson-link">
            <a onClick={() => {
              removeBook(book);
            }}>
              Remove
            </a>
          </li>
          <li className="lesson-link">Edit</li>
        </ul>
      </div>
      <div className="lesson-progress">
        <svg>
          <circle cx="35" cy="35" r="35"></circle>
          <circle cx="35" cy="35" r="35"></circle>
        </svg>
        <p className="number">87%</p>
        <p className="completed">Completed</p>
      </div>
      <div className="lesson-update">
        <p className="update-current">Current chapter</p>
        <p className="update-chapter">Chapter IV</p>
        <button className="update-button">Update Progress</button>
      </div>
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
