const port = 'http://localhost:3000';
const userLoginForm = document.querySelector('#login-form')
const showCall = new ShowService(port);
const userCall = new UserCall(port)
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
}


function handleSubmit(e) {
  e.preventDefault()
  showCall.createShow();
}

