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
      // debugger
        let u = new User(user)
        u.render()
        u.attachToDom()
        let shows = user.shows.map(show => new Show(show))
        for (let i = 0; i < shows.length; i++) {
          shows[i].render()
          shows[i].attachToDom()  
        }
        loggedInUserEmail = u.email
        // debugger
        userLoginForm.classList.add('hidden');
      });
  }
  
}