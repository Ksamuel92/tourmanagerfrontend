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