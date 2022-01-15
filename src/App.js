import React from 'react';
import { ExpenseItem, Card } from './components';
import expensesData from './expensesData';

function App() {
  // console.log('expensesData', expensesData);
  const expensesList = () => expensesData.map((exp) => <ExpenseItem key={exp.id} props={exp} />);
  console.log(expensesList());
  return (
    <Card className="expenses">
      {expensesList()}
    </Card>
  );
}

export default App;
