import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useUser } from '../UserContext';
import UserBox from './UserBox';

const UserBoxContainer = ({ style }) => {
  const { currentUser } = useUser();
  const history = useHistory();

  const handleReposClick = () => {
    history.push('/repositorios');
  };

  const handleStarredClick = () => {
    history.push('/favoritos');
  };

  return (
    <UserBox
      user={currentUser}
      style={style}
      handleReposClick={handleReposClick}
      handleStarredClick={handleStarredClick}
    />
  );
};

UserBoxContainer.defaultProps = {
  style: undefined,
};

UserBoxContainer.propTypes = {
  style: PropTypes.object,
};

export default UserBoxContainer;
