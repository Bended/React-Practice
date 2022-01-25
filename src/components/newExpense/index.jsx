import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { ExpenseForm } from '../expenseForm';

export function NewExpense(props) {
  const { saveExpenseHandler } = props;
  const saveExpenseDataHandler = (expenseDate) => {
    const onSaveExpenseData = {
      ...expenseDate,
      id: (Math.floor(Math.random() * 99999)).toString(),
    };
    saveExpenseHandler(onSaveExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

NewExpense.defaultProps = {
  saveExpenseHandler: () => {},
};

NewExpense.propTypes = {
  saveExpenseHandler: PropTypes.func,
};
