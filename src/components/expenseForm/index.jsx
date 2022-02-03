import React, { useState } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export function ExpenseForm(props) {
  const { onSaveExpenseData } = props;
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    onSaveExpenseData(expenseData);
    setInputAmount('');
    setInputTitle('');
    setInputDate('');
    toggleForm();
  };
  return (
    isFormOpen
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      ? (
        <form onSubmit={submitHandler} action="">
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label className="">Title</label>
              <input value={inputTitle} onChange={titleChangeHandler} type="text" className="" />
            </div>
            <div className="new-expense__control">
              <label className="">Amount</label>
              <input value={inputAmount} onChange={amountChangeHandler} type="number" min="0" step="0.01" />
            </div>
            <div className="new-expense__control">
              <label className="">Date</label>
              <input value={inputDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={toggleForm}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={toggleForm}>Add Expense</button>
      )
  );
}

ExpenseForm.defaultProps = {
  onSaveExpenseData: () => {},
};

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func,
};
