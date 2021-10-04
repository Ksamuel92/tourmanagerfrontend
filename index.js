const port = 'http://localhost:3000';
const showCall = new ShowService(port);
const showContainer = document.querySelector('#show-container');

showCall.getShows()

