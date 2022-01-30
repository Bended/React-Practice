import React, { useState } from 'react';
import {
  ExpenseItem, Card, NewExpense, ExpenseFilter,
} from './components';
import expensesData from './expensesData';

function App() {
  const [expensesList, setExpensesList] = useState(expensesData);
  const [selectedYear, setSelectedYear] = useState('2020');
  const saveHandler = (expenseData) => {
    setExpensesList([expenseData, ...expensesData]);
  };
  const changeFilterHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };
  const filteredList = expensesList.filter((exp) => (exp.date.getFullYear()).toString() === selectedYear);
  return (
    <div>
      <NewExpense selectedYear={selectedYear} saveExpenseHandler={saveHandler} />
      <div>
        <Card className="expenses">
          <ExpenseFilter onChangeFilter={changeFilterHandler} />
          {filteredList.length
            ? filteredList.map((exp) => <ExpenseItem key={exp.id} props={exp} />)
            : <p>No result found</p>}
        </Card>
      </div>
    </div>
  );
}

export default App;
