import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  const { clickHandler } = props;
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
  book: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Book;
