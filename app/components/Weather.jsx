var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function( ) {
    return {
      isLoading: false,
      error: false
    }
  },

  handleSearch: function(location){
    //make API call using location
    var that = this;

    debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        error: false
      });
    }, function(err){
      that.setState({isLoading: false, error: true, errorMessage: err})
      console.log(that.state.errorMessage);
    });
  },

  render: function(){
    var {location, temp, isLoading, error} = this.state;
    if(isLoading && !error){
      var message = <h4>Loading weather ...</h4>
    }else if (location && temp && !error){
      var message = <WeatherMessage location={location} temp={temp}/>
    }else if(error){
      var message = <h4>Error.  Are you sure you entered the correct city?</h4>
    }

    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {message}
      </div>
    );
  }
});

module.exports = Weather
