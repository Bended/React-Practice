import React from 'react';
import './index.scss';
import { ExpenseForm } from '../expenseForm';

export function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}
