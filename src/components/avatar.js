class Avatar {
  constructor(url, name){
    this.imgUrl = url;
    this.name = name;
  }

  render() {
    const img = new Image(); // same as  document.createElement('img');
    img.src = this.imgUrl;
    img.alt = this.name;
    img.title = this.name;
    img.className = 'profile-avatar';
    img.width = 128;
    img.height = 128;

    return img;
  }
}

module.exports = Avatar;