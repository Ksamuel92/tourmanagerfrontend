class ShowService {
  constructor(port) {
    this.port = port
  }

  async getShows() {
    const shows = await fetch(`${this.port}/shows`)
    .then(shows => shows.json())
    .then(json => console.log(json))
  }
}