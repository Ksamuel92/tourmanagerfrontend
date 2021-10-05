class UserService {
  constructor(port) {
    this.port = port
  }

  createUser() {
    const userInfo = {
      user: {
       name: userNameValue.value,
       email: userEmailValue.value
      }
    }
    const configObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(userInfo)
    }

    fetch(`${this.port}/users`, configObj)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  
}