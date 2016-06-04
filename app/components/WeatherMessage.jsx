var React = require('react');

var WeatherMessage = ({temp, location}) =>
    (
      <div>
        <h3>{temp} Deg F in {location}</h3>
      </div>
    );


module.exports = WeatherMessage;
