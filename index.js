/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const port = 'http://localhost:3000';
const userLoginForm = document.querySelector('#login-form');
const userLoginFormDiv = document.querySelector('#login');
const header = document.querySelector('#header');
const headerDiv = document.querySelector('#header-section');
const showInfo = document.querySelector('#shows-info');
const newShowButton = document.querySelector('#new-show-button');
const newShowFormDiv = document.querySelector('#new-show');
const newShowFormCloseButton =
  document.querySelector('#new-form-close');
const showCall = new ShowService(port);
const userCall = new UserService(port);
let loggedInUserEmail = null;
const userNameValue = document.querySelector('#user-name');
const userEmailValue = document.querySelector('#user-email');
const userCard = document.querySelector('.user-card');
const showContainer = document.querySelector('#show-container');
const showGross = document.querySelector('#shows-gross');
const newShowForm = document.querySelector('#new-show-form');
const venueValue = document.querySelector('#show-venue');
const cityValue = document.querySelector('#show-city');
const promoterValue = document.querySelector('#show-promoter');
const emailValue = document.querySelector('#show-email');
const dateValue = document.querySelector('#show-date');
const loadinValue = document.querySelector('#show-loadin');
const merchValue = document.querySelector('#show-merch');
const guaranteeValue = document.querySelector('#show-guarantee');
const advancedValue = document.querySelector('#show-advanced');

const handleUserLogin = (e) => {
  e.preventDefault();
  userCall.createUser();
  header.classList.add('header');
  header.classList.remove('hidden');
  showContainer.classList.remove('hidden');
  showInfo.classList.remove('hidden');
  showGross.classList.add('shows-gross');
  showGross.classList.remove('hidden');
  document.body.classList.remove('overlay');
  userLoginFormDiv.classList.add('hidden');
};

const handleSubmit = (e) => {
  e.preventDefault();
  showCall.createShow();
  newShowForm.reset();
  newShowFormDiv.classList.add('hidden');
  document.body.classList.remove('overlay');
  document.querySelector('.user-card').style.backgroundColor =
    '#ffffff';
};

const handleShowClose = (e) => {
  e.preventDefault();
  newShowForm.reset();
  newShowFormDiv.classList.add('hidden');
  document.body.classList.remove('overlay');
  document.querySelector('.user-card').style.backgroundColor =
    '#ffffff';
};

const handleKeyDown = (e) => {
  if (
    e.key === 'Escape' &&
    !newShowFormDiv.classList.contains('hidden')
  ) {
    handleShowClose(e);
  }
};

userLoginForm.addEventListener('submit', handleUserLogin);
newShowForm.addEventListener('submit', handleSubmit);
document.addEventListener('keydown', handleKeyDown);
newShowFormCloseButton.addEventListener('click', handleShowClose);
