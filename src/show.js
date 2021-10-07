class Show {
  static all = [];
constructor({advanced, date, email, guarantee, id, loadin, merch, promoter, user, venue, city}){
  this.advanced = advanced //
  this.email = email
  this.date = date //
  this.guarantee = guarantee //
  this.id = id //
  this.loadin = new Date(loadin) //
  this.merch = merch
  this.promoter = promoter //
  this.user = user
  this.venue = venue //
  this.city = city //
  this.element = document.createElement('div')
  this.element.dataset['id'] = id
  this.element.className = "show-card"
  this.element.id = `show-${this.id}`
  this.element.addEventListener('click', this.handleClick)
  Show.all.push(this) 
  // debugger
}

render() {
  // debugger
  this.element.innerHTML = `<div class="show-info">
  <h3>${this.venue} - ${this.city}</h3>
  <h4> Load In Date and Time: ${this.date} - ${this.loadin.getUTCHours()}:${this.loadin.getUTCMinutes()} </h4>
  <ul id="show-specifics">
  <li>Promoter: ${this.promoter} - ${this.email}</li>
  <li>Show Advanced: ${this.advanced ? 'yes' : 'no'}</li>
  </ul>
  <ul class = "show-gross" id= "show-${this.id}-gross">
    <li>Merch Total: $${this.merch}</li>
    <li>Show Guarantee: $${this.guarantee}</li>
    <li class="show-totals">Total: $${this.merch + this.guarantee}</li>
  </ul>
  </div>
  <button type="button" class="edit-btn" data-id ="${this.id}">Edit</button>
  <button type="button" class="delete-btn" data-id ="${this.id}">Delete</button>
  `
  return this.element
}

handleClick = e => {
  if (e.target.innerText === 'Edit'){
    e.target.innerText = 'Save'
    this.renderEditForm();
  } else if (e.target.innerText === 'Save'){
    e.target.innerText = 'Edit'
    this.updateShowInfo(e.target)
  }
  else if (e.target.innerText === 'Delete'){
    e.target.parentElement.remove()
    showCall.deleteShow(e);
  } else if (e.target.innerText === 'Save Comment') {

  }
}

renderEditForm() {
let div = this.element.querySelector('.show-info')
let venue = div.children[0].innerText.split(' - ')[0]
let city = div.children[0].innerText.split(' - ')[1]
let loadin = div.children[1].innerText.split(' - ')[1]
let promoter = div.children[2].children[0].innerText.split('Promoter: ')[1].split(' - ')[0]
let email = div.children[2].children[0].innerText.split('Promoter: ')[1].split(' - ')[1]
let merch = div.children[3].children[0].innerText.split('Merch Total: $')[1]
let showDate = div.children[1].innerText.split(' - ')[0].split('Load In Date and Time: ')[1]
let guarantee = div.children[3].children[1].innerText.split('Show Guarantee: $')[1]
let advanced = div.children[2].children[1].innerText.split('Show Advanced: ')[1]
// debugger
div.innerHTML = `
<div class=edit-show-card>
<form data-set:"${this.id}"id= "edit-show-form">
<h3>Edit Show</h3>
<label for= "venue">Venue:</label>
<input type="text" title="venue" id="edit-venue" value= "${venue}">
<label for="city">City:</label>
<input type="text" title="city" id="edit-city" placeholder="City, State" value= "${city}"></br>
<label for="promoter">Promoter:</label>
<input type="text" title="promoter" id="edit-promoter" value= "${promoter}"></br>
<label for="email">Promoter's Email:</label>
<input type="email" title="email" id="edit-email" value="${email}"></br>
<label for="date">Show Date:</label>
<input type="date" title="date" id="edit-date" value="${showDate}">
<label for>Load In Time:</label>
<input type="time" title="loadin" id="edit-loadin" value="${loadin}"><br>
<label for="advanced">Advanced?</label>
<input type="checkbox" title="advanced" id="edit-advanced" ${advanced === 'yes' ? 'checked' : 'unchecked'}></br>
<label for="merch">Merch Total:</label>
<input type="number" title="merch" id="edit-merch" value = "${merch}"></br>
<label for="guarantee">Show Guarantee:</label>
<input type="number" title="guarantee" id="edit-guarantee" value = "${guarantee}"></br>
</form>
</div>`

return this.element
}

updateShowInfo(editBtn) {
  const div = editBtn.previousElementSibling
  // debugger
  
  const editVenueValue = div.querySelector('#edit-venue')
  const editCityValue = div.querySelector('#edit-city')
  const editPromoterValue = div.querySelector('#edit-promoter')
  const editEmailValue = div.querySelector('#edit-email')
  const editDateValue = div.querySelector('#edit-date')
  const editLoadInValue = div.querySelector('#edit-loadin')
  const splitTime = editLoadInValue.value.split(':')
  const editAdvancedValue = div.querySelector('#edit-advanced')
  const editMerchValue = div.querySelector('#edit-merch')
  const editGuaranteeValue = div.querySelector('#edit-guarantee')
  this.advanced = editAdvancedValue.value
  this.email = editEmailValue.value
  this.date = editDateValue.value 
  this.guarantee = Number(editGuaranteeValue.value) //
  this.loadin = new Date (1,1,2000,(splitTime[0] - 5),splitTime[1])
  this.merch = Number(editMerchValue.value)
  this.promoter = editPromoterValue.value //
  this.venue = editVenueValue.value
  this.city = editCityValue.value

  showCall.updateShow(this)
}

attachToDom() {
  showContainer.appendChild(this.element)
}

static getGross() {
  const showTotalsArray = Array.from(document.querySelectorAll('.show-totals'))
 const totalGross = showTotalsArray.map(show => Number(show.innerText.split(" ")[1].replace(/[^0-9.-]+/g,""))).reduce((previousTotal, currentTotal) => previousTotal + currentTotal)
//  debugger
 return showGross.innerText = `Total Gross: $${totalGross}`
}

 static parseISOString(s) {
  var b = s.split(/\D+/);
  return `${b[3]}:${b[4]}`
}


}
