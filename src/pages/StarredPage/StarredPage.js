import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import UserSearch from '../../components/UserSearch';
import { useUser } from '../../components/UserContext';
import RepositoriesList from '../../components/RepositoriesList';
import PageTitle from '../../components/PageTitle';

import './StarredPage.styles.less';
import Content from '../../components/Content';

const StarredPage = () => {
  const { isFetching, currentUser } = useUser();
  const history = useHistory();

  const renderContent = () => {
    if (isFetching) {
      return <p style={{ marginTop: 48 }}>...</p>;
    }

    if (!currentUser) {
      return null;
    }

    return <RepositoriesList items={currentUser.starred} />;
  };

  const handlePrev = () => {
    history.push('/');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pesquisa de Favoritos | Github</title>
        <meta
          name="description"
          content="Pesquise os repositórios favoritos de um usuário no Github"
        />
      </Helmet>
      <PageTitle onPrev={handlePrev}>Favoritos</PageTitle>
      <div className="repositories-page">
        <UserSearch />
        <Content style={{ marginTop: 48 }}>{renderContent()}</Content>
      </div>
    </>
  );
};

export default StarredPage;
