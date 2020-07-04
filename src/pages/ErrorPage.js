import React from 'react';
import * as PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const ErrorPage = ({ history, setHasError }) => (
  <div
    style={{
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 24px',
    }}
  >
    <div
      style={{
        display: 'flex',
        maxWidth: 1880,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 930,
        }}
      >
        <div
          style={{
            maxWidth: '100%',
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 35,
              fontWeight: 'bold',
              color: '#656565',
              marginBottom: 16,
            }}
          >
            Desculpe-nos.
          </h1>
          <p style={{ fontSize: 24, color: '#656565', textAlign: 'justify' }}>
            Entamos enfrentando dificuldades técnicas, por favor tente novamente
            mais tarde.
          </p>
        </div>
        <button
          type="button"
          id="buttonHome"
          style={{
            borderRadius: 3,
            fontSize: 13,
            borderColor: 'transparent',
            outline: 'none!important',
            transition: 'background-color 0.2s, color 0.2s',
            backgroundColor: '#009BDD',
            marginTop: 24,
            textTransform: 'uppercase',
          }}
          onClick={() => {
            setHasError(false);
            history.push('/');
          }}
        >
          Voltar para página inicial
        </button>
      </div>
    </div>
  </div>
);

ErrorPage.propTypes = {
  history: PropTypes.object.isRequired,
  setHasError: PropTypes.func.isRequired,
};

export default withRouter(ErrorPage);
