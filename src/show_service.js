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
        city: cityValue.value
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
    .then(data => console.log(data));
    
  }
}