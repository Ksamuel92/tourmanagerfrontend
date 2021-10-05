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
    .then(user =>{ 
        let u = new User(user)
        u.render()
        u.attachToDom()
        userLoginForm.classList.add('hidden');
      });
  }
  
}