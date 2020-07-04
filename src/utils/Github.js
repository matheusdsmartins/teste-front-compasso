class Github {
  static baseUrl = 'https://api.github.com';

  static get = async (path) => {
    const response = await fetch(path, {
      headers: {
        Authorization: `Basic ${btoa(
          `matheusdsmartins:b0c8580013303bb75bc1816890d9f76e1ab35050`,
        )}`,
      },
    });

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
