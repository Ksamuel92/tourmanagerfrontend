class UserService {
  constructor(port) {
    this.port = port
  }

  async fetchUser() {
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
    
    try {
    const response = await fetch(`${this.port}/users`, configObj)
    const user = await response.json()
    return user
    } catch (err) {
      alert(err)
    }
  }
    
    async createUser() {
    const user = await this.fetchUser()
    let u = new User(user)
    u.render()
    u.attachToDom()
    let shows = user.shows.map(show => new Show(show))
    for (let i = 0; i < shows.length; i++) {
      shows[i].render()
      shows[i].attachToDom()  
    }
      loggedInUserEmail = u.email
      userLoginForm.classList.add('hidden');
    }
  }
