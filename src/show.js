class Show {
  static all = [];
constructor({advanced, email, guarantee, id, loadin, merch, promoter, user, venue, city}){
  this.advanced = advanced //
  this.email = email //
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
  Show.all.push(this) 
  // debugger
}

render() {
  this.element.innerHTML = `
  <h3>${this.venue} - ${this.city}</h3>
  <ul>
  <li>Promoter: ${this.promoter} - ${this.email}</li>
  <li>Load In Time: ${new Date(this.loadin)}</li>
  <li>Show Advanced: ${this.advanced}</li>
  <ul id= "show-${this.id}-gross">
    <li>Merch Total: ${this.merch}</li>
    <li>Show Guarantee: $${this.guarantee}</li>
    <li class="show-totals">Total: $${this.merch + this.guarantee}</li>
  </ul>
  </ul>
  <p>This show belongs to ${this.user.email}. </p>
  `
  return this.element
}

attachToDom() {
  showContainer.appendChild(this.element)
}

static getGross() {
  const showTotalsArray = Array.from(document.querySelectorAll('.show-totals'))
 return showTotalsArray.map(show => Number(show.innerText.split(" ")[1].replace(/[^0-9.-]+/g,""))).reduce((previousTotal, currentTotal) => previousTotal + currentTotal)
}


}
