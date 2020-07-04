import React from 'react';
import PropTypes from 'prop-types';

import './Button.styles.less';

const Button = ({ children, style, onClick, dataTestId }) => (
  <button
    type="button"
    onClick={onClick}
    data-testid={dataTestId}
    style={style}
    className="button"
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: undefined,
  dataTestId: undefined,
  style: undefined,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
};

export default Button;
