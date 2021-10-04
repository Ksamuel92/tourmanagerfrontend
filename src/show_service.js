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
    })
  }
}