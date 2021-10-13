/* eslint-disable no-undef */
class Show {
  static all = [];

  constructor({
    advanced,
    date,
    email,
    guarantee,
    id,
    loadin,
    merch,
    promoter,
    user,
    venue,
    city,
  }) {
    this.advanced = advanced;
    this.email = email;
    this.date = date;
    this.guarantee = guarantee;
    this.id = id;
    this.loadin = new Date(loadin);
    this.merch = merch;
    this.promoter = promoter;
    this.user = user;
    this.venue = venue;
    this.city = city;
    this.element = document.createElement('div');
    this.element.dataset.id = id;
    this.element.className = 'show-card';
    this.element.id = `show-${this.id}`;
    this.element.addEventListener('click', this.handleClick);
    Show.all.push(this);
  }

  render() {
    this.element.innerHTML = `<div class="show-info">
  <h3>${this.venue} - ${this.city}</h3>
  <h4> Load In Date and Time: ${
    this.date
  } - ${this.loadin.getUTCHours()}:${this.loadin.getUTCMinutes()} </h4>
  <ul id="show-specifics">
  <li>Promoter: ${this.promoter} - ${this.email}</li>
  <li>Show Advanced: ${this.advanced ? 'yes' : 'no'}</li>
  </ul>
  <ul class = "show-gross" id= "show-${this.id}-gross">
    <li>Merch Total: $${this.merch}</li>
    <li>Show Guarantee: $${this.guarantee}</li>
    <li class="show-totals">Total: $${
      this.merch + this.guarantee
    }</li>
  </ul>
  </div>
  <div class="modal-footer">
  <button type="button" class="edit-btn" data-id ="${
    this.id
  }">Edit</button>
  <button type="button" class="delete-btn" data-id ="${
    this.id
  }">Delete</button>
  <button type="button" class="trash-btn" data-id =${
    this.id
  }>Trash</button>
  </div>
  `;
    return this.element;
  }

  // change innertext to class so devs can edit innerText
  handleClick = (e) => {
    // debugger
    if (e.target.classList.contains('edit-btn')) {
      e.target.innerText = 'Save';
      e.target.classList.remove('edit-btn');
      e.target.classList.add('save-btn');
      this.renderEditForm(this);
    } else if (e.target.classList.contains('save-btn')) {
      e.target.innerText = 'Edit';
      e.target.classList.remove('save-btn');
      e.target.classList.add('edit-btn');
      this.updateShowInfo(e.target);
    } else if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.parentElement.remove();
      Show.getGross();
      showCall.deleteShow(this);
    } else if (e.target.classList.contains('trash-btn')) {
      showCall.trashShow(this);
      this.render();
    }
  };

  renderEditForm() {
    const div = this.element.querySelector('.show-info');
    div.innerHTML = `
<div class=edit-show-card>
<form data-set:"${this.id}"id= "edit-show-form">
<h3>Edit Show</h3>
<label for= "venue">Venue:</label>
<input type="text" title="venue" id="edit-venue" name= "venue" value= "${
      this.venue
    }">
<label for="city">City:</label>
<input type="text" title="city" id="edit-city" name = "city" placeholder="City, State" value= "${
      this.city
    }"></br>
<label for="promoter">Promoter:</label>
<input type="text" title="promoter" id="edit-promoter" name="promoter" value= "${
      this.promoter
    }"></br>
<label for="email">Promoter's Email:</label>
<input type="email" title="email" id="edit-email" name="email" value="${
      this.email
    }"></br>
<label for="date">Show Date:</label>
<input type="date" title="date" id="edit-date" name="date" value="${
      this.date
    }">
<label for>Load In Time:</label>
<input type="time" title="loadin" id="edit-loadin" name="loadin" value="${
      this.loadin
    }"><br>
<input type="checkbox" name="advanced" title="advanced" id="edit-advanced" ${
      this.advanced === 'yes' ? 'checked' : 'unchecked'
    }>
<label for="advanced">Advanced?</label></br>
<label for="merch">Merch Total:</label>
<input type="number" title="merch" id="edit-merch" name="merch" value = "${
      this.merch
    }"></br>
<label for="guarantee">Show Guarantee:</label>
<input type="number" title="guarantee" id="edit-guarantee" name="guarantee" value = "${
      this.guarantee
    }"></br>
</form>
</div>`;

    return this.element;
  }

  updateShowInfo(editBtn) {
    const form =
      editBtn.parentNode.previousElementSibling.children[0]
        .children[0];
    this.advanced = form.advanced.value;
    this.email = form.email.value;
    this.date = form.date.value;
    this.guarantee = Number(form.guarantee.value);
    this.loadin = new Date(
      1,
      1,
      2000,
      form.loadin.value.split(':')[0],
      form.loadin.value.split(':')[1],
    );
    this.merch = Number(form.merch.value);
    this.promoter = form.promoter.value;
    this.venue = form.venue.value;
    this.city = form.city.value;

    showCall.updateShow(this);
  }

  attachToDom() {
    dom.showContainer.appendChild(this.element);
  }

  static getGross() {
    const showTotalsArray = Array.from(
      document.querySelectorAll('.show-totals'),
    );
    if (showTotalsArray.length === 0) {
      return dom.showGross.innerText = 'Total Gross: $0'; // return to avoid empty array on .reduce
    }
    const totalGross = showTotalsArray
      .map((show) =>
        Number(
          show.innerText.split(' ')[1].replace(/[^0-9.-]+/g, ''),
        ),
      )
      .reduce(
        (previousTotal, currentTotal) => previousTotal + currentTotal,
      );
    dom.showGross.innerText = `Total Gross: $${totalGross}`;
  }
}
