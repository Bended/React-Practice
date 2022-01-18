import React from 'react';
import './index.scss';

export function ExpenseForm() {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="">Title</label>
          <input type="text" className="" />
        </div>
        <div className="new-expense__control">
          <label className="">Amount</label>
          <input type="number" min="0" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label className="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
