const Name = require('./name');
const Email = require('./email');

module.exports = class UserInfo {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  render() {
    const div = document.createElement('div');
    div.className = 'user-info';

    const name = new Name(this.name);
    const email = new Email(this.email);

    div.appendChild(name.render());
    div.appendChild(email.render());

    return div;
  }
};
