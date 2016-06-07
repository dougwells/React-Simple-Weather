var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function( ) {
    return {
      isLoading: false,
      error: false,
      location: undefined,
      temp: undefined
    }
  },

  handleSearch: function(location){
    //make API call using location
    var that = this;

    this.setState({isLoading: true, errorMessage: undefined});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        error: false
      });
    }, function(err){
      that.setState({isLoading: false, error: true, errorMessage: err.message})
    });
  },

  componentDidMount: function(){
    var city = this.props.location.query.city;
    if(city && city.length>0){
      this.handleSearch(city);
      window.location.hash="/#";
    }
  },

  componentWillReceiveProps: function(newProps){
    var city = newProps.location.query.city;
    if(city && city.length>0){
      this.handleSearch(city);
      window.location.hash="/#";
    }
  },

  render: function(){
    var {location, temp, isLoading, error, errorMessage} = this.state;
    if(isLoading && !error){
      var message = <h4 className="text-center">Loading weather ...</h4>
    }else if (location && temp && !error){
      var message = <WeatherMessage location={location} temp={temp}/>
    }else if(error){
      console.dir(error, errorMessage)
      var message = <ErrorModal errorNote={errorMessage}/>
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {message}
      </div>
    );
  }
});

module.exports = Weather;
