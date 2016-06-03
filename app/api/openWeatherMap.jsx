var axios = require('axios');

const OPEN_WEATHER_MAP_URL =
"http://api.openweathermap.org/data/2.5/weather?appid=094c7cfda5c9b5993192ea76c73f8d41&units=imperial";

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURI(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    return axios.get(requestUrl).then(
    function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }

    }, function(err){
      throw new Error(err.data.message)
    });
  }
}
