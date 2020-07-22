import React from "react";

const Book = () => {
  return (
    <tr key={this.props.book.id}>
      <td>{this.props.book.id}</td>
      <td>{this.props.book.title}</td>
      <td>{this.props.book.category}</td>
    </tr>
  );
}

export default Book;
