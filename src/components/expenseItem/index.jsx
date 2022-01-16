import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ExpenseDate } from '../expenseDate';
import { Card } from '../card';
import './index.scss';

export function ExpenseItem({ props }) {
  const { amount, date } = props;
  const [title, setTitle] = useState(props.title);
  const btnClicked = () => {
    setTitle('Hello');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          {amount}
        </div>
      </div>
      <button type="button" onClick={() => btnClicked()}>Click me</button>
    </Card>
  );
}

ExpenseItem.defaultProps = {
  title: 'Ivan',
  amount: 0,
  date: new Date(),
  props: {},
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  props: PropTypes.objectOf(PropTypes.any),
};
