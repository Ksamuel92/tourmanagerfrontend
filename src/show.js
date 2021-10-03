class Show {
  static all = [];
constructor({advanced, email, gurantee, id, loadin, merch, promoter, user, venue, city}){
  this.advanced = advanced //
  this.email = email //
  this.gurantee = gurantee //
  this.id = id //
  this.loadin = loadin //
  this.merch = merch
  this.promoter = promoter //
  this.user = user
  this.venue = venue //
  this.city = city //
  this.element = document.createElement('li')
  this.element.dataset['id'] = id
  this.element.id = `show-${this.id}`
  Show.all.push(this) 
  // debugger
}

render() {
  this.element.innerHTML = `
  <div data-id= "${this.id}">
  <h3>${this.venue} - ${this.city}</h3>
  <ul>
  <li>Promoter: ${this.promoter} - ${this.email}</li>
  <li>Load In Time: ${this.loadin}</li>
  <li>Show Advanced: ${this.advanced}</li>
  <ul id= "show-${this.id}-gross">
    <li>Merch Total: ${this.merch}</li>
    <li>Show Gurantee: ${this.gurantee}</li>
    <li>Total: ${this.merch + this.gurantee}</li>
  </ul>
  </ul>
  <p>This show belongs to ${this.user.email}. </p>
  </div>
  `
}


}
