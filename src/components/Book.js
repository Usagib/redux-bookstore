import React from "react";
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <tr key={`book${id}`}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
