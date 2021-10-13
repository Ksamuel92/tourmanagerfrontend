/* eslint-disable class-methods-use-this */
class DomService {
  get userLoginForm() {
    return document.getElementById('login-form');
  }

  get userLoginFormDiv() {
    return document.getElementById('login');
  }

  get header() {
    return document.getElementById('header');
  }

  get headerDiv() {
    return document.getElementById('header-section');
  }

  get showInfo() {
    return document.getElementById('shows-info');
  }

  get newShowFormDiv() {
    return document.getElementById('new-show');
  }

  get newShowFormCloseButton() {
    return document.getElementById('new-form-close');
  }

  get userCard() {
    return document.querySelector('.user-card');
  }

  get showContainer() {
    return document.getElementById('show-container');
  }

  get showGross() {
    return document.getElementById('shows-gross');
  }

  get newShowForm() {
    return document.getElementById('new-show-form');
  }
}

// const userLoginForm = document.querySelector('#login-form');// TODO: add to DOM class.
// const userLoginFormDiv = document.querySelector('#login');// TODO: add to DOM class.
// const header = document.querySelector('#header'); // TODO: add to DOM class.
// const headerDiv = document.querySelector('#header-section'); // TODO: add to DOM class.
// const showInfo = document.querySelector('#shows-info'); // TODO: add to DOM class.
// const newShowFormDiv = document.querySelector('#new-show'); // TODO: add to DOM class.
// const newShowFormCloseButton =
//   document.querySelector('#new-form-close'); //TODO: add to DOM class.
// const showCall = new ShowService(port);
// const userCall = new UserService(port);
// let loggedInUserEmail = null;
// const userCard = document.querySelector('.user-card'); // TODO: add to DOM class
// const showContainer = document.querySelector('#show-container');// TODO: add to DOM class
// const showGross = document.querySelector('#shows-gross'); // TODO: add to DOM class
// const newShowForm = document.querySelector('#new-show-form'); //TODO: add to DOM class
// //Too many variables!!!!!
