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
  this.element.innerHTML = `<div class="show-info">
  <h3>${this.venue} - ${this.city}</h3>
  <h4> Load In Date and Time:${this.date} - ${Show.parseISOString(this.loadin)} </h4>
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
  <button type="button" data-id:"${this.id}"}">Edit</button>
  <button type="button" data-id:"${this.id}">Delete</button>
  `
  return this.element
}

handleClick = e => {
  if (e.target.innerText === 'Edit'){
    this.renderEditForm();
  } else if (e.target.innerText === 'Delete'){
  } else if (e.target.innerText === 'Save Comment') {

  }
}

renderEditForm() {
let div = this.element.querySelector('.show-info')
let venue = div.children[0].innerText.split(' - ')[0]
let city = div.children[0].innerText.split(' - ')[1]
let loadin = div.children[1].innerText.split('Load In Time: ')[1]
let promoter = div.children[2].children[0].innerText.split('Promoter: ')[1].split(' - ')[0]
let email = div.children[2].children[0].innerText.split('Promoter: ')[1].split(' - ')[1]
let merch = div.children[3].children[0].innerText.split('Merch Total: $')[1]
let date =
let guarantee = div.children[3].children[1].innerText.split('Show Guarantee: $')[1]
let advanced = div.children[2].children[1].innerText.split('Show Advanced: ')[1]
debugger
div.innerHTML = `
<div class=edit-show-card>
<form id= "edit-show-form">
<h3>Edit Show</h3>
<label for= "venue">Venue:</label>
<input type="text" title="venue" id="show-venue" value= "${venue}">
<label for="city">City:</label>
<input type="text" title="city" id="show-city" placeholder="City, State" value= "${city}"></br>
<label for="promoter">Promoter:</label>
<input type="text" title="promoter" id="show-promoter" value= "${promoter}"></br>
<label for="email">Promoter's Email:</label>
<input type="text" title="email" id="show-email" pattern="^\S+@\S+$" value="${email}"></br>
<label for="loadin">Load In Time and Date:</label>
<input type="datetime-local" title="loadin" id="show-loadin" value="${Date.parse(loadin)}"></br>
<label for="advanced">Advanced?</label>
<input type="checkbox" title="advanced" id="show-advanced" ${advanced === 'yes' ? 'checked' : 'unchecked'}></br>
<label for="merch">Merch Total:</label>
<input type="number" title="merch" id="show-merch" value = "${merch}"></br>
<label for="guarantee">Show Guarantee:</label>
<input type="number" title="guarantee" id="show-guarantee" value = "${guarantee}"></br>
<input type="submit" value = "Create Show">
</form>
</div>`

// const textInputArray = [...div.children[1].children.slice(0,-1)]
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
  debugger
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}


}
