import React from 'react';
import PropTypes from 'prop-types';
import { ExpenseDate } from '../expenseDate';
import { Card } from '../card';
import './index.scss';

export function ExpenseItem({ props }) {
  const { title, amount, date } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          {amount}
        </div>
      </div>
      <button type="button" onClick={() => { console.log('click'); }}>Click me</button>
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
