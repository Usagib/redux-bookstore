import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  console.log('bookcomponent prop');
  console.log(props);
  const { book } = props;
  const { id, title, category } = book;
  const { onClick } = props;
  const removeBook = () => {
    onClick(book);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="submit" onClick={removeBook}>Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Book;
