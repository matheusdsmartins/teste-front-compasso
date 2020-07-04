import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronLeft } from '../../assets/chevron_left.svg';

import './PageTitle.styles.less';

const PageTitle = ({ onPrev, children }) => {
  return (
    <div className="page-title">
      {onPrev && (
        <button type="button" onClick={onPrev} className="page-title__button">
          <ChevronLeft />
        </button>
      )}
      <h1 className="page-title__h1">{children}</h1>
    </div>
  );
};

PageTitle.defaultProps = {
  onPrev: undefined,
};

PageTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  onPrev: PropTypes.func,
};

export default PageTitle;
