/* eslint-disable no-undef */
class UserService {
  constructor(port) {
    this.port = port;
  }

  async fetchUserJSON() {
    const userInfo = {
      user: {
        name: userNameValue.value,
        email: userEmailValue.value,
      },
    };

    const configObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(userInfo),
    };

    try {
      const response = await fetch(`${this.port}/users`, configObj);
      const user = await response.json();
      return user;
    } catch (err) {
      alert(err.message);
    }
  }

  async createUser() {
    const user = await this.fetchUserJSON();
    try {
      const userObject = new User(user);
      userObject.render();
      userObject.attachToDom();
      user.shows.map((show) => {
        const showObject = new Show(show);
        showObject.render();
        showObject.attachToDom();
      });

      loggedInUserEmail = userObject.email;
      userLoginForm.classList.add('hidden');
      Show.getGross();
    } catch (err) {
      alert(err.message);
    }
  }
}
