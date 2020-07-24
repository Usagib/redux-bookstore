import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <tr key={`book${id}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="submit" onClick={this.handleRemove(book)}>Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.string.isRequired,
};

export default Book;
