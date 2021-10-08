/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
class ShowService {
  constructor(port) {
    this.port = port;
  }

  async fetchShows() {
    try {
      const response = await fetch(`${this.port}/shows`);
      const shows = await response.json();
      return shows;
    } catch (err) {
      alert(err)
    }
  }

  async getShows() {
    const shows = await this.fetchShows()
    for (let show of shows){
      let s = new Show(show)
      s.render()
      s.attachToDom()
      }
    Show.getGross() 
  }

  async postShow() {
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
    try {
      const response = await fetch(`${this.port}/shows`, configObj)
      const show = await response.json()
      return show
    } catch (err) {
      alert(err)
    }
  }

  async createShow() {
    const show = await this.postShow();
    const s = new Show(show);
    s.render();
    s.attachToDom();
    Show.getGross();
  }

  async updateShow(show) {
    const {
      advanced,
      email,
      guarantee,
      loadin,
      merch,
      promoter,
      venue,
      city,
      date,
      id,
    } = show;

    const editShowInfo = {
      show: {
        id,
        advanced,
        email,
        guarantee,
        loadin,
        merch,
        promoter,
        venue,
        city,
        date,
      },
      user: {
        email: loggedInUserEmail,
      },
    };

    const configObj = {
      method: 'PATCH',
      headers: {
        'content-type':'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(editShowInfo),
    };
    try {
      const response = await fetch(
        `${this.port}/shows/${id}`,
        configObj,
      );
      if (!response.ok) throw new Error(response.message);
      show.render();
      Show.getGross();
    } catch (err) {
      alert(err);
    }
  }

  async deleteShow(e) {
    const { id } = e.target.dataset.id;
    try {
      const response = await fetch(`${this.port}/shows/${id}`, {
        method: 'DELETE',
      });
      const deletedShow = await response.json();
      // eslint-disable-next-line no-undef
      alert(deletedShow.message);
      Show.getGross();
    } catch (err) {
      alert(err);
    }
  }
}
