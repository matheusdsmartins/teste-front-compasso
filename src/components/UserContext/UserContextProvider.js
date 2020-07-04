import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        isFetching,
        setIsFetching,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
};

export default UserContextProvider;
