import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

export const cat = [
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
      <div className="form">
        <hr className="line-div" />
        <p className="form-title">ADD NEW BOOK</p>
        <p>{error}</p>
        <form className="form">
          <input
            id="Title"
            value={title}
            onChange={this.handleChange}
            type="text"
            placeholder="Book title"
            className="input-title"
          />
          <select
            className="input-select"
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
          <button
            type="submit"
            className="input-submit"
            onClick={this.handleSubmit}
          >
            ADD BOOK
          </button>
        </form>
      </div>
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
