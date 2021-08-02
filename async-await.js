//Fetch remote data using async/await

async function fetchgeocode(city) {
    try {
        let response = await fetch('https://geocode.xyz/seattle?json=1m/$city');
        return await response.json();
    }catch(err){
        console.error(err);

      response(longt);
      response(latt);

        console.log(longt);
        console.log(latt);
    }
}



/*
const API_URL = 'https://geocode.xyz/seattle?json=1m';


async function fetchgeocode() {

const response = await fetch('https://geocode.xyz/seattle?json=1m');
const geocode = await response.json();
return geocode;
console.log(json);
}

fetchgeocode().then(geocode => {
    geocode;
});

fetchgeocode();

*/

/*

(async () => {
    let response = await fetch('https://geocode.xyz/seattle?json=1m');
    let user = await response.json(); 
}) ();

*/

/*
async function fetchMoviesJSON() {
    const response = await fetch('/movies');
    const movies = await response.json();
    return movies;
  }
  
  fetchMoviesJSON().then(movies => {
    movies; // fetched movies
  });

  */


/*Response.all([response])
.then(values =>
    console.log(values)
    */

