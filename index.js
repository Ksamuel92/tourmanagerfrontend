const port = 'http://localhost:3000';
const userLoginForm = document.querySelector('#login-form')
const userLoginFormDiv = document.querySelector('#login')
const header = document.querySelector('#header')
const headerDiv = document.querySelector('#header-section')
const showInfo = document.querySelector('#shows-info')
const newShowButton = document.querySelector('#new-show-button')
const newShowFormDiv = document.querySelector('#new-show')
const newShowFormCloseButton = document.querySelector('#new-form-close')
const showCall = new ShowService(port);
const userCall = new UserService(port);
let loggedInUserEmail = null;
const userNameValue = document.querySelector('#user-name')
const userEmailValue = document.querySelector('#user-email')
const userCard = document.querySelector('.user-card')
const showContainer = document.querySelector('#show-container');
const showGross = document.querySelector('#shows-gross');
const newShowForm = document.querySelector('#new-show-form')
const venueValue = document.querySelector('#show-venue')
const cityValue = document.querySelector('#show-city')
const promoterValue = document.querySelector('#show-promoter')
const emailValue = document.querySelector('#show-email')
const dateValue = document.querySelector('#show-date')
const loadinValue = document.querySelector('#show-loadin')
const merchValue = document.querySelector('#show-merch')
const guaranteeValue = document.querySelector('#show-guarantee')
const advancedValue = document.querySelector('#show-advanced')



showCall.getShows()
userLoginForm.addEventListener('submit', handleUserLogin);
newShowForm.addEventListener('submit', handleSubmit);
newShowFormCloseButton.addEventListener('click', handleShowClose);

function handleShowClose(){
  newShowForm.reset()
  newShowFormDiv.classList.add('hidden')
  document.body.classList.remove('overlay')
  document.querySelector('.user-card').style.backgroundColor = '#ffffff'
}

function handleSubmit(e) {
  e.preventDefault()
  showCall.createShow();
  newShowForm.reset()
  newShowFormDiv.classList.add('hidden');
  document.body.classList.remove('overlay');
  document.querySelector('.user-card').style.backgroundColor = '#ffffff'
}



// function handleNewShowForm(e){
//   console.log(e)
//   newShowFormDiv.classList.remove('hidden')
// }

function handleUserLogin(e) {
  e.preventDefault();
  userCall.createUser();
  header.classList.add('header')
  header.classList.remove('hidden');
  showContainer.classList.remove('hidden');
  showInfo.classList.remove('hidden');
  showGross.classList.add('shows-gross')
  showGross.classList.remove('hidden')
  // newShowFormDiv.classList.remove('hidden');
  document.body.classList.remove('overlay');

  userLoginFormDiv.classList.add('hidden');
  


}

// function handleSubmit(e) {
//   e.preventDefault()
//   showCall.createShow();
// }

