import React from "react";
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

export const cat = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.round(Math.random() * 100),
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    switch (event.target.id) {
      case 'Category':
        this.setState({
          category: event.target.value,
        });
        break;
      case 'Title':
        this.setState({
          title: event.target.value,
        });
        break;
      default:
        return this.state;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.bookSubmit(this.state);
    this.setState({
      id: Math.round(Math.random() * 100),
      title: '',
      category: '',
    });
  }

  render() {
    return (
      <form>
        <h3>Add a book</h3>
        <br />
        <input id="Title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
          placeholder="title" />
        <br />
        <select id="Category"
          value={this.state.category}
          onChange={this.handleChange}>
          <option key="cat-default" value={cat}>Category</option>
          {cat.map(cat => (<option key={`cat-${cat}`}>{cat}</option>))}
        </select>
        <button type="submit" onClick={this.handleSubmit}>Confirm</button>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookSubmit: (book) => {
      dispatch(createBook(book))
    }
  }
};

export default connect(null, mapDispatchToProps)(BookForm);
