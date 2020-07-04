import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Box from '../Box';
import { ReactComponent as RepoIcon } from '../../assets/repo_icon.svg';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';

import './UserBox.styles.less';

const UserBox = ({ user, style, handleReposClick, handleStarredClick }) => {
  return (
    <Box style={style} className="userbox">
      <img className="userbox__image" src={user.image} alt="User" />
      <div className="userbox__content">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.location}</p>
        <p>{user.blog}</p>
        <a
          className="userbox__userlink"
          href={user.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.url}
        </a>
        <div className="userbox__actions">
          <Button onClick={handleReposClick} style={{ marginRight: 4 }}>
            <RepoIcon style={{ marginRight: 4 }} />
            Repos
            <span className="userbox__badge" style={{ marginLeft: 8 }}>
              {user.repositoryCount}
            </span>
          </Button>
          <Button onClick={handleStarredClick}>
            <StarIcon style={{ marginRight: 4 }} />
            Favoritos
            <span className="userbox__badge" style={{ marginLeft: 8 }}>
              {user.starredCount}
            </span>
          </Button>
        </div>
      </div>
    </Box>
  );
};

UserBox.defaultProps = {
  style: undefined,
};

UserBox.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    repos: PropTypes.array,
    starred: PropTypes.array,
    repositoryCount: PropTypes.number,
    starredCount: PropTypes.number,
    email: PropTypes.string,
    location: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
  style: PropTypes.object,
  handleReposClick: PropTypes.func.isRequired,
  handleStarredClick: PropTypes.func.isRequired,
};

export default UserBox;
