const apiUrl = 'https://reqres.in/api';

function load(page) {
  const url = `${apiUrl}/users?page=${page}`
   
  return fetch(url).then( res => {
    if(!res.ok) {
      throw new Error(`API returned error code ${res.status}`);
    }
    return res.json();
  })
  .then( result => result.data).catch( error => {
    console.log(error)
    return null;
  });
}

module.exports.load = load;