import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export function TestComponent({ props }) {
  const { name, secondName } = props;
  return (
    <div className="wrapper__test">
      <p className="wrapper__text wrapper__text--red">
        Hello,
        {name}
        ,
        {secondName}
      </p>
    </div>
  );
}

TestComponent.defaultProps = {
  name: 'Ivan',
  secondName: 'Ivanov',
  props: {},
};

TestComponent.propTypes = {
  name: PropTypes.string,
  secondName: PropTypes.string,
  props: PropTypes.objectOf(PropTypes.string),
};
