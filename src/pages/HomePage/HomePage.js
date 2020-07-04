import React from 'react';
import { Helmet } from 'react-helmet';

import UserSearch from '../../components/UserSearch';
import { useUser } from '../../components/UserContext';
import UserBox from '../../components/UserBox';

import './HomePage.styles.less';

const HomePage = () => {
  const { isFetching, currentUser } = useUser();

  const renderContent = () => {
    if (isFetching) {
      return <p style={{ marginTop: 48 }}>...</p>;
    }

    if (!currentUser) {
      return null;
    }

    return <UserBox style={{ marginTop: 48 }} />;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pesquisa de Usuário | Github</title>
        <meta name="description" content="Pesquise um usuário no Github" />
      </Helmet>
      <div className="homepage">
        <UserSearch />
        {renderContent()}
      </div>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
