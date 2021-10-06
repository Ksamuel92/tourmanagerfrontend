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

  updateShow(editBtn) {
    debugger
    const div = editBtn.previousElementSibling
    const id = div.dataset.id
    const editVenueValue = div.querySelector('#edit-venue')
    const editCityValue = div.querySelector('#edit-city')
    const editPromoterValue = div.querySelector('#edit-promoter')
    const editEmailValue = div.querySelector('#edit-email')
    const editDateValue = div.querySelector('#edit-date')
    const editLoadInValue = div.querySelector('#edit-loadin')
    const editAdvancedValue = div.querySelector('#edit-advanced')
    const editMerchValue = div.querySelector('#edit-merch')
    const editGuaranteeValue = div.querySelector('#edit-guarantee')

    const editShowInfo = {
      show: {
        id: id,
        advanced: editAdvancedValue.value,
        email: editEmailValue.value,
        guarantee: editGuaranteeValue.value,
        loadin: editLoadInValue.value,
        merch: editMerchValue.value,
        promoter: editPromoterValue.value,
        venue: editVenueValue.value,
        city: editCityValue.value,
        date: editDateValue.value
      },
      user: {
        email: loggedInUserEmail,
      }
  }
  const configObj = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(editShowInfo)
  }
}

fetch(`${this.port}/shows/${id}`, configObj)
.then(response => response.json())
.then(show => {
  let s = new Show(show)
})
}