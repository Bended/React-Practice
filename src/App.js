import React, { useState } from 'react';
import {
  ExpenseItem, Card, NewExpense, ExpenseFilter,
} from './components';
import expensesData from './expensesData';

function App() {
  const [expensesList, setExpensesList] = useState(expensesData);
  const [selectedYear, setSelectedYear] = useState();
  const saveHandler = (expenseData) => {
    setExpensesList([expenseData, ...expensesData]);
  };
  const changeFilterHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };
  // eslint-disable-next-line max-len
  const filteredList = selectedYear ? expensesList.filter((exp) => (exp.date.getFullYear()).toString() === selectedYear) : expensesList;
  let listContent = <p>No Item found</p>;
  if (filteredList.length) {
    listContent = filteredList.map((exp) => <ExpenseItem key={exp.id} props={exp} />);
  }
  return (
    <div>
      <NewExpense saveExpenseHandler={saveHandler} />
      <div>
        <Card className="expenses">
          <ExpenseFilter value={selectedYear} onChangeFilter={changeFilterHandler} />
          {listContent}
        </Card>
      </div>
    </div>
  );
}

export default App;
