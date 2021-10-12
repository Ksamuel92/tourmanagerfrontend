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
        date: dateValue.value,
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

  async deleteShow(e) {
    const { id } = e.target.dataset;
    try {
      const deletedShow = await this.fetchShowsJSON(
        `/shows/${id}`,
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
}
