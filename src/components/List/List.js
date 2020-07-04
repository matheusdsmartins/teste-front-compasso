import React from 'react';
import PropTypes from 'prop-types';

import './List.styles.less';

const List = ({ children, style }) => {
  return (
    <div className="list" style={style}>
      {children}
    </div>
  );
};

List.defaultProps = {
  style: undefined,
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]).isRequired,
  style: PropTypes.object,
};

export default List;
