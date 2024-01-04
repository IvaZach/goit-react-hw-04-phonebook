import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => (
  <label className="form-label">
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      className="form-control"
    ></input>
  </label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
