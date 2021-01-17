const { load } = require('./users');
const ProfileCard = require('./components/profile-card');

function init() {  
  $('#forward').click( function() {
    $('main').empty();
    const page = $('#page');
    let pageNumber = page.text();
    console.log(pageNumber)
    pageNumber++;
    page.text(pageNumber);
    renderUsers();
  });

  $('#back').click( function() {
    $('main').empty();
    const page = $('#page');
    let pageNumber = page.text();
    console.log(pageNumber)
    if(pageNumber > 0) {
      pageNumber--;
      page.text(pageNumber);
      renderUsers();
    }
  });

  renderUsers();
}

function renderUsers() {  
  const main = $('main');
  blockButtons();

  load($('#page').text())
    .then(users => {
      if (!users || !Array.isArray(users)) {
        main.innerHTML = 'Unable to load user data at this time';
      }
      users.forEach(user => {
        const { id, email, avatar: avatarUrl } = user;
        const name = user.first_name + ' ' + user.last_name;
        const profileCard = new ProfileCard(id, name, email, avatarUrl);

        main.append(profileCard.render());
      });
    })
    .catch(err => console.log(err));
}

function blockButtons(){
  const page = $('#page');
  let pageNumber = page.text();
  if (pageNumber === '1'){
    $('#back').prop('disabled', true)
    $('#forward').prop('disabled', false)
  } else if (pageNumber === '2') {
    $('#forward').prop('disabled', true)
    $('#back').prop('disabled', false)
  }
}

$(document).ready(init);
