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
      var message = <h4 className="text-center">Loading weather ...</h4>
    }else if (location && temp && !error){
      var message = <WeatherMessage location={location} temp={temp}/>
    }else if(error){
      var message = <h4 className="text-center">Error.  Are you sure you entered the correct city?</h4>
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {message}
      </div>
    );
  }
});

module.exports = Weather
