class ShowService {
  constructor(port) {
    this.port = port
  }

   getShows() {
    fetch(`${this.port}/shows`)
    .then(shows => shows.json())
    .then(data => {
      for(let show of data){
        let s = new Show(show)
        s.render()
        s.attachToDom()
      }
      Show.getGross() 
    })
  }

  createShow() {
    const showInfo = {
      show: {
        advanced: advancedValue.value,
        email: emailValue.value,
        guarantee: guaranteeValue.value,
        loadin: loadinValue.value,
        merch: merchValue.value,
        promoter: promoterValue.value,
        venue: venueValue.value,
        city: cityValue.value,
        date: dateValue.value
      },
      user: {
        email: loggedInUserEmail,
      }
    }
    const configObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(showInfo)
    }

    fetch(`${this.port}/shows`, configObj)
    .then(response => response.json())
    .then(show => {
      let s = new Show(show);
      s.render();
      s.attachToDom();
      Show.getGross();
    } );
    
  }

  updateShow(show) {

    const {advanced, email, guarantee, loadin, merch, promoter, venue, city, date, id} = show
    

    const editShowInfo = {
      show: {
        id,
        advanced,
        email,
        guarantee,
        loadin,
        merch,
        promoter,
        venue,
        city,
        date
      },
      user: {
        email: loggedInUserEmail
      }
  }
  // debugger
  const configObj = {
    method: 'PATCH',
    headers: {
      'content-type':'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(editShowInfo)
  }
  fetch(`${this.port}/shows/${id}`, configObj)
  .then(show.render())
  }

  deleteShow(e) {
    // debugger
   const id = e.target.dataset.id

   fetch(`${this.port}/shows/${id}`, {method: 'DELETE'})
   .then(response => response.json())
   .then(data => {
     alert(data.message)
    Show.getGross()
    })

  }


}