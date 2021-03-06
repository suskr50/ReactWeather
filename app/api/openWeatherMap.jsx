var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4c693b4573a33f12c07b66d98c9604e5&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  
    return axios.get(requestUrl).then(function (res) {
  

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else { 
          if (res.data.name === location) {
            return res.data.main.temp;
         } else {
           throw new Error('City not found');
          }
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}


