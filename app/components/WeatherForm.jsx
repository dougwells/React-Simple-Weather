var React = require('react');

var WeatherForm = React.createClass({
  render: function(){
    return(
      <form>
        <input type="text" placehoder="Enter City Name"></input>
        <button>Get Weather</button>
      </form>

    );
  }
});

module.exports = WeatherForm;
