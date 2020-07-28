import React from 'react';
import PropTypes from 'prop-types';
import { cat } from './BookForm';

const CategoryFilter = ({ handleFilterChange }) => {
    const { onChange } = props;
    
    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };
    return (
        <select name="category" onChange={handleChange}>
            <option>All</option>
            {cat.map(category => (
                <option key={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

CategoryFilter.propTypes = {

};

export default CategoryFilter;
