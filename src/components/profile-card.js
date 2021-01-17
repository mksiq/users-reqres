const Avatar = require('./avatar');
const UserInfo = require('./user-info');

class ProfileCard {
  constructor(id, name, email, avatarUrl) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatarUrl = avatarUrl;
  }

  render() {
    const section = $('<section></section>');
    section.attr(
      {
        id: `profile_${this.id}`,
        class: 'profile-card'
      }
    );

    const avatar = new Avatar(this.avatarUrl, this.name);
    const userInfo = new UserInfo(this.name, this.email);
    section.append(avatar.render());
    section.append(userInfo.render());

    return section;
  }
}

module.exports = ProfileCard;