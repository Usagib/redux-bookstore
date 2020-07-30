import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const cat = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.round(Math.random() * 100),
      title: '',
      category: '',
      error: '',
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
    return false;
  }

  handleSubmit(event) {
    const { title, category } = this.state;
    const { bookSubmit } = this.props;
    event.preventDefault();
    if (title === '' || category === '') {
      this.setState({
        error: 'Please make sure to fill all the fields',
      });
    } else {
      bookSubmit(this.state);
      this.setState({
        id: Math.round(Math.random() * 100),
        title: '',
        category: '',
        error: '',
      });
    }
    return true;
  }

  render() {
    const { title, category, error } = this.state;
    return (
      <form>
        <h3>Add a book</h3>
        <span>{error}</span>
        <br />
        <input
          id="Title"
          value={title}
          onChange={this.handleChange}
          type="text"
          placeholder="title"
        />
        <br />
        <select
          id="Category"
          value={category}
          onChange={this.handleChange}
        >
          <option key="cat-default" value={cat}>
            Category
          </option>
          {cat.map(cat => (
            <option key={`cat-${cat}`}>{cat}</option>
          ))}
        </select>
        <button type="submit" onClick={this.handleSubmit}>
          Confirm
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  bookSubmit: book => {
    dispatch(createBook(book));
  },
});

BookForm.propTypes = {
  bookSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
