class Template {
  constructor(_name, _position, _id, _email, _special, _specialVal) {
    this.n = _name;
    this.p = _position;
    this.i = _id;
    this.e = _email;
    this.s = _special;
    this.sv = _specialVal;
  }
  make() {
    switch (this.p) {
      case "Manager":
        this.icon = '<i class="fa fa-coffee"></i>';
        break;
      case "Engineer":
        this.icon = '<i class="fas fa-glasses"></i>';
        break;
      case "Intern":
        this.icon = '<i class="fas fa-user-graduate"></i>';
    }

    if (this.p === "Engineer") {
      this.sv = `<a href="https://github.com/${this.sv}">${this.sv}</a> `;
    }

    return `<section class='singleCard'>
      <section class="headerWrapper">
          <div class='singleName'>${this.n}</div>
          <div class='singlePosition'>${this.icon} ${this.p}</div>
      </section>
      <section class="infoWrapper">
          <div class='row'>
              <p>ID: ${this.i}</p>
          </div>
          <div class='row'>
              <p>Email: <a href="mailto:${this.e}">${this.e}</a></p>
          </div>
          <div class='row'>
              <p>
              ${this.s}: ${this.sv}
              </p>
          </div>
      </section>
      </section>`;
  }
}

module.exports = Template;
