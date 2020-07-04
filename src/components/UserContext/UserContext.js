import { createContext } from 'react';

const userContext = createContext({
  user: '',
  setUser: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isFetching: false,
  setIsFetching: () => {},
});

export default userContext;
