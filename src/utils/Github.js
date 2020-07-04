class Github {
  static baseUrl = 'https://api.github.com';

  static get = async (path) => {
    const response = await fetch(path);

    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    return response.json();
  };

  static fetchUser = async (user) => {
    return this.get(`${this.baseUrl}/users/${user}`);
  };

  static fetchUserRepos = async (user) => {
    return this.get(`${this.baseUrl}/users/${user}/repos`);
  };

  static fetchUserStarred = async (user) => {
    return this.get(`${this.baseUrl}/users/${user}/starred`);
  };
}

export default Github;
