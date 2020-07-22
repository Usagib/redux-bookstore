import React from "react";
import Book from "./Book";
import { connect } from "react-redux";

class BookList extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {this.props.books.map((book) => {
          return <Book book={book} />;
        })}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps)(BookList);
