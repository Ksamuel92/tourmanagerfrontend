const port = 'http://localhost:3000';
const userLoginForm = document.querySelector('#login-form')
const header = document.querySelector('#header')
const showCall = new ShowService(port);
const userCall = new UserService(port);
let loggedInUserEmail = null;
const userNameValue = document.querySelector('#user-name')
const userEmailValue = document.querySelector('#user-email')
const showContainer = document.querySelector('#show-container');
const showGross = document.querySelector('#shows-gross');
const newShowForm = document.querySelector('#new-show-form')
const venueValue = document.querySelector('#show-venue')
const cityValue = document.querySelector('#show-city')
const promoterValue = document.querySelector('#show-promoter')
const emailValue = document.querySelector('#show-email')
const loadinValue = document.querySelector('#show-loadin')
const merchValue = document.querySelector('#show-merch')
const guaranteeValue = document.querySelector('#show-guarantee')
const advancedValue = document.querySelector('#show-advanced')


showCall.getShows()
userLoginForm.addEventListener('submit', handleUserLogin);
newShowForm.addEventListener('submit', handleSubmit);

function handleUserLogin(e) {
  e.preventDefault();
  
  userCall.createUser();
}


function handleSubmit(e) {
  e.preventDefault()
  showCall.createShow();
}

