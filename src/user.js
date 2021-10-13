/* eslint-disable no-undef */
class User {
  static all = [];

  constructor({ name, email, id, shows }) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.shows = shows;
    this.element = document.createElement('div');
    this.element.dataset.id = id;
    this.element.className = 'user-card';
    this.element.id = `user-${this.id}`;
    this.element.addEventListener('click', this.handleClick);
    User.all.push(this);
  }

  handleClick = (e) => {
    if (e.target.innerText === 'New Show') {
      dom.newShowFormDiv.classList.remove('hidden');
      document.body.classList.add('overlay');
      dom.userCard.style.backgroundColor =
        'transparent';
    }
  };

  render() {
    this.element.innerHTML = `
    <h3>Hello ${this.name}!</h3></br>
    <button type="button" id="new-show-button" value= "New Show">New Show</button>
    `;
    return this.element;
  }

  attachToDom() {
    dom.headerDiv.appendChild(this.element);
  }
}
