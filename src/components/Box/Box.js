import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Box.styles.less';

const Box = ({ children, className, style }) => {
  return (
    <div style={style} className={clsx(className, 'box')}>
      {children}
    </div>
  );
};

Box.defaultProps = {
  className: undefined,
  style: undefined,
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Box;
