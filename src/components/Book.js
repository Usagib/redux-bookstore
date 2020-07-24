import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  const { onClick } = props;
  const removeBook = () => {
    onClick(book);
  };
  return (
    <tr key={`book${id}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="submit" onClick={removeBook}>Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
