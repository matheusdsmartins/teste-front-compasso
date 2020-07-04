import React, { useEffect } from 'react';

import Github from '../../utils/Github';
import useDebounce from '../../utils/useDebounce';
import UserSearch from './UserSearch';
import { useUser } from '../UserContext';

const UserSearchContainer = () => {
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    setIsFetching,
  } = useUser();

  const debouncedUser = useDebounce(user, 500);

  const fetchUser = async () => {
    try {
      setIsFetching(true);

      const fetchedUser = await Github.fetchUser(debouncedUser);

      const repositories = await Github.fetchUserRepos(fetchedUser.login);
      const starred = await Github.fetchUserStarred(fetchedUser.login);

      // eslint-disable-next-line
      console.log(repositories);
      // eslint-disable-next-line
      console.log(starred);

      setCurrentUser({
        name: fetchedUser.name,
        image: fetchedUser.avatar_url,
        url: fetchedUser.html_url,
        login: fetchedUser.login,
        email: fetchedUser.email,
        location: fetchedUser.location,
        blog: fetchedUser.blog,
        repositoryCount: repositories.length > 99 ? 99 : repositories.length,
        starredCount: starred.length > 99 ? 99 : starred.length,
        starred,
        repositories,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (debouncedUser) {
      if (!currentUser || currentUser?.login !== debouncedUser) {
        fetchUser();
      }
    } else {
      setCurrentUser(null);
    }
  }, [debouncedUser]);

  const handleSearchChange = (e) => {
    setUser(e.target.value);
  };

  return <UserSearch user={user} handleSearchChange={handleSearchChange} />;
};

export default UserSearchContainer;
