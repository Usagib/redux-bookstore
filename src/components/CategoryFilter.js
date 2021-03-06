import React from 'react';
import PropTypes from 'prop-types';
import { cat } from '../containers/BookForm';

const CategoryFilter = props => {
  const { onChange } = props;
  const handleChange = event => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <select
      className="nav-select"
      name="category"
      onChange={handleChange}
    >
      <option>CATEGORIES</option>
      {cat.map(category => (
        <option key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
