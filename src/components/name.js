module.exports = class Name {
  constructor(name){
    this.name = name;
  }

  render() {
    const h2 = document.createElement('h2');
    h2.innerText = this.name;
    h2.className = 'profile-name';
    return h2;
  }
}