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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Book.defaultProps = {
  id: 0,
  title: '',
  category: '',
}

export default Book;
