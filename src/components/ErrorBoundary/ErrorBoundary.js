import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import ErrorPage from '../../pages/ErrorPage';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  setHasError = (value) => this.setState({ hasError: value });

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorPage setHasError={this.setHasError} />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
};

export default ErrorBoundary;
