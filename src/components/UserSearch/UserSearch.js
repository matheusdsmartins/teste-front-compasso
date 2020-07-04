import React from 'react';
import PropTypes from 'prop-types';

import Search from '../Search';
import Logo from '../../assets/logo.png';

import './UserSearch.styles.less';

const UserSearch = ({ user, handleSearchChange }) => {
  return (
    <div className="usersearch">
      <img className="usersearch__logo" src={Logo} alt="Logo" />
      <Search
        className="usersearch__input"
        value={user}
        onChange={handleSearchChange}
        maxLength={20}
      />
    </div>
  );
};

UserSearch.propTypes = {
  user: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default UserSearch;
