import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import List from '../List';

import './RepositoriesList.styles.less';

const RepositoriesList = ({ items, style }) => {
  const mapRepository = (repository) => {
    return (
      <Box
        className="repositories-list__item"
        key={repository.id}
        style={{ marginBottom: 16 }}
      >
        <p style={{ fontWeight: 'bold' }}>{repository.full_name}</p>
        <p>{repository.description}</p>
        <p>
          {repository.watchers_count}{' '}
          {repository.watchers_count === 1 ? 'seguidor' : 'seguidores'}
        </p>
        <p>
          {repository.stargazers_count}{' '}
          {repository.stargazers_count === 1 ? 'estrela' : 'estrelas'}
        </p>
        <a
          href={repository.html_url}
          style={{ textAlign: 'right', marginTop: 24 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repository.html_url}
        </a>
      </Box>
    );
  };

  return <List style={style}>{items.map(mapRepository)}</List>;
};

RepositoriesList.defaultProps = {
  items: [],
  style: undefined,
};

RepositoriesList.propTypes = {
  items: PropTypes.array,
  style: PropTypes.object,
};

export default RepositoriesList;
