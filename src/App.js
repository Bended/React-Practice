import React from 'react';
import {
  ExpenseItem, Card, NewExpense, ExpenseFilter,
} from './components';
import expensesData from './expensesData';

function App() {
  // console.log('expensesData', expensesData);
  const expensesList = () => expensesData.map((exp) => <ExpenseItem key={exp.id} props={exp} />);
  const saveHandler = (expenseData) => {
    expensesData.push(expenseData);
    console.log('saveHandler', expensesData);
  };
  const changeFilterHandler = (selectedValue) => {
    console.log('Selected Year: ', selectedValue);
  };
  return (
    <div>
      <NewExpense saveExpenseHandler={saveHandler} />
      <div>
        <Card className="expenses">
          <ExpenseFilter onChangeFilter={changeFilterHandler} />
          {expensesList()}
        </Card>
      </div>
    </div>
  );
}

export default App;
