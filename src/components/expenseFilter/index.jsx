import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

export function ExpenseFilter(props) {
  const { onChangeFilter, selectedYear } = props;
  const handleChange = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={handleChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

ExpenseFilter.defaultProps = {
  onChangeFilter: () => {},
};

ExpenseFilter.propTypes = {
  onChangeFilter: PropTypes.func,
};
