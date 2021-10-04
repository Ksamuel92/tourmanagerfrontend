const port = 'http://localhost:3000';
const showCall = new ShowService(port);
const showContainer = document.querySelector('#show-container');
const showGross = document.querySelector('#shows-gross')

showCall.getShows()

