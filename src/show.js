class Show {
  static all = [];
constructor({advanced, date, email, guarantee, id, loadin, merch, promoter, user, venue, city}){
  this.advanced = advanced //
  this.email = email
  this.date = date //
  this.guarantee = guarantee //
  this.id = id //
  this.loadin = loadin //
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
  <h4> Load In Date and Time: ${this.date} - ${Show.parseISOString(this.loadin)} </h4>
  <ul>
  <li>Promoter: ${this.promoter} - ${this.email}</li>
  <li>Show Advanced: ${this.advanced ? 'yes' : 'no'}</li>
  </ul>
  <ul id= "show-${this.id}-gross">
    <li>Merch Total: $${this.merch}</li>
    <li>Show Guarantee: $${this.guarantee}</li>
    <li class="show-totals">Total: $${this.merch + this.guarantee}</li>
  </ul>
  </div>
  <button type="button" class="edit-btn" data-id:"${this.id}">Edit</button>
  <button type="button" class="delete-btn" data-id:"${this.id}">Delete</button>
  `
  return this.element
}

handleClick = e => {
  if (e.target.innerText === 'Edit'){
    e.target.innerText = 'Save'
    this.renderEditForm();
  } else if (e.target.innerText === 'Save'){
    e.target.innerText = 'Edit'
    showCall.updateShow(e.target);
  }
  else if (e.target.innerText === 'Delete'){
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
<form id= "edit-show-form">
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
