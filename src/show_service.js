/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
class ShowService {
  constructor(port) {
    this.port = port;
  }

  async fetchShowsJSON(
    resourceURL,
    configObj = {},
    errorMsg = 'Something went wrong.',
  ) {
    const response = await fetch(
      `${this.port}${resourceURL}`,
      configObj,
    );
    if (!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  }
  // No getShows() call in code
  //
  // async getShows() {
  //   const shows = await this.fetchShowsJSON(
  //     '/shows',
  //     'Could not fetch shows from server! Try again.',
  //   );
  //   shows.map((show) => {
  //     const showObject = new Show(show);
  //     showObject.render();
  //     showObject.attachToDom();
  //   });
  //   Show.getGross();
  // }

  async postShow(form) {
    const showInfo = {
      show: {
        advanced: form.advanced.value,
        email: form.email.value,
        guarantee: form.guarantee.value,
        loadin: form.loadin.value,
        merch: form.merch.value,
        promoter: form.promoter.value,
        venue: form.venue.value,
        city: form.city.value,
        date: form.date.value,
      },
      user: {
        email: loggedInUserEmail,
      },
    };

    const configObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(showInfo),
    };

    try {
      const show = await this.fetchShowsJSON(
        '/shows',
        configObj,
        'Could not post show to server. Try again!',
      );
      const showObject = new Show(show);
      showObject.render();
      showObject.attachToDom();
      Show.getGross();
    } catch (err) {
      alert(err);
    }
  }

  async updateShow(show) {
    debugger
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
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(editShowInfo),
    };
    try {
      const showData = await this.fetchShowsJSON(
        `/shows/${id}`,
        configObj,
        "Couldn't update show. Try again!",
      );
      show.render();
      Show.getGross();
    } catch (err) {
      alert(err);
    }
  }

  async deleteShow(show) {
    try {
      const deletedShow = await this.fetchShowsJSON(
        `/shows/${show.id}`,
        { method: 'DELETE' },
        "Couldn't delete show. Try again!",
      );
      // eslint-disable-next-line no-undef
      alert(deletedShow.message);
      Show.getGross();
    } catch (err) {
      alert(err);
    }
  }

  async trashShow(show) {
    // debugger
    const showInfo = {
      show: {
        merch: 0,
        guarantee: 0,
      },
    };
    const configObj = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(showInfo),
    };
    try {
      const showData = await this.fetchShowsJSON(
        `/shows/${show.id}`,
        configObj,
        "Couldn't update show. Try again!",
      );
      //TODO: figure out how to render 0 in real time
      show.render()
    } catch (err) {
      alert(err);
    }
  
    show.render();
    Show.getGross();
  }
}

