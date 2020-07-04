import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, componentProps, ...rest }) => {
  const renderChildren = () => {
    return <Component {...rest} {...componentProps} />;
  };

  return <Route {...rest} render={renderChildren} />;
};

AppRoute.defaultProps = {
  componentProps: undefined,
  component: undefined,
};

AppRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
  ]),
  componentProps: PropTypes.object,
};

export default AppRoute;
