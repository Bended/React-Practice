import React from 'react';
import PropTypes from 'prop-types';

export function Card({ children, className }) {
  const classes = className;
  return <div className={classes}>{children}</div>;
}

Card.defaultProps = {
  className: '',
  children: undefined,
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
