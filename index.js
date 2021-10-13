/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const port = 'http://localhost:3000';
const showCall = new ShowService(port);
const userCall = new UserService(port);
const dom = new DomService();
let loggedInUserEmail = null;

const handleUserLogin = (e) => {
  e.preventDefault();
  userCall.createUser(e.target);
  dom.header.classList.add('header');
  dom.header.classList.remove('hidden');
  dom.showContainer.classList.remove('hidden');
  dom.showInfo.classList.remove('hidden');
  dom.showGross.classList.add('shows-gross');
  dom.showGross.classList.remove('hidden');
  document.body.classList.remove('overlay');
  dom.userLoginFormDiv.classList.add('hidden');
};

const handleSubmit = (e) => {
  e.preventDefault();
  showCall.postShow(e.target);
  dom.newShowForm.reset();
  dom.newShowFormDiv.classList.add('hidden');
  document.body.classList.remove('overlay');
  document.querySelector('.user-card').style.backgroundColor =
    '#ffffff';
};

const handleShowClose = (e) => {
  e.preventDefault();
  dom.newShowForm.reset();
  dom.newShowFormDiv.classList.add('hidden');
  document.body.classList.remove('overlay');
  document.querySelector('.user-card').style.backgroundColor =
    '#ffffff';
};

const handleKeyDown = (e) => {
  if (
    e.key === 'Escape' &&
    !dom.newShowFormDiv.classList.contains('hidden')
  ) {
    handleShowClose(e);
  }
};

dom.userLoginForm.addEventListener('submit', handleUserLogin);
dom.newShowForm.addEventListener('submit', handleSubmit);
document.addEventListener('keydown', handleKeyDown);
dom.newShowFormCloseButton.addEventListener('click', handleShowClose);
