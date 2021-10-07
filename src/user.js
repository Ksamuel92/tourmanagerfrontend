class User {
  static all = []

  constructor({name, email, id}){
    this.name = name
    this.email = email
    this.element = document.createElement('div');
    this.element.dataset["id"] = id
    this.element.className = "user-card"
    this.element.id = `user-${this.id}`
    User.all.push(this)
  }

  render() {
    this.element.innerHTML = `
    <h3>Hello ${this.name}!</h3></br>
    <p>Get started by creating your first show below!</p>
    `
    return this.element
  }

  attachToDom() {
    header.parentNode.insertBefore(this.element, header.nextSibling);
  }
}