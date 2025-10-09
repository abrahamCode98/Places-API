//const axios = require('axios')

// const HttpError = require("../models/http-error")

// const API_KEY = ${process.env.GOOGLE_API_KEY};


//function if there is an API KEY
// async function getCoordsForAddress(address) {
//    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/ja=son?address=${encodeURIComponent(address)}&key=${API_KEY}`)

// const data = response.data

// if (!data || data.status === 'ZERO_RESULT') {
//     const error = new HttpError('Could not find location for the spcified address', 422)
//     throw error; 
// }

// const coordinates = data.results[0].geometry.location;

// return coordinates;
// };



//fall back function incase there's no API KEY or credit card.
function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  }
}

module.exports = getCoordsForAddress;  

