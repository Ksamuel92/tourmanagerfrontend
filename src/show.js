class Show {
  static all = [];
constructor({advanced, email, gurantee, id, loadin, merch, promoter, user, venue}){
  this.advanced = advanced
  this.email = email
  this.gurantee = gurantee
  this.id = id
  this.loadin = loadin
  this.merch = merch
  this.promoter = promoter
  this.user = user
  this.venue = venue
  this.element = document.createElement('div')
  this.element.dataset['id'] = id
  this.element.id = `show-${this.id}`
  Show.all.push(this)
  // debugger
}



}
