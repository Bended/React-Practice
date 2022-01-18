import React from 'react';
import { ExpenseItem, Card, NewExpense } from './components';
import expensesData from './expensesData';

function App() {
  // console.log('expensesData', expensesData);
  const expensesList = () => expensesData.map((exp) => <ExpenseItem key={exp.id} props={exp} />);
  return (
    <div>
      <NewExpense />
      <Card className="expenses">
        {expensesList()}
      </Card>
    </div>
  );
}

export default App;
