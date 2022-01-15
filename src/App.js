import React from 'react';
import { ExpenseItem } from './components';
import expensesData from './expensesData';

function App() {
  // console.log('expensesData', expensesData);
  const expensesList = () => expensesData.map((exp) => <ExpenseItem key={exp.id} props={exp} />);
  return (
    <div className="expenses">
      {expensesList()}
    </div>
  );
}

export default App;
