import React from 'react';
import PropTypes from 'prop-types';

import './Content.styles.less';

const Content = ({ children, style }) => {
  return (
    <div className="content" style={style}>
      {children}
    </div>
  );
};

Content.defaultProps = {
  style: undefined,
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  style: PropTypes.object,
};

export default Content;
