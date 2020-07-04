import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, className, placeholder, maxLength }) => {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

Search.defaultProps = {
  value: '',
  onChange: undefined,
  className: undefined,
  placeholder: 'Digite um nome de usuário',
  maxLength: undefined,
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

export default Search;
