var React = require('react');

var WeatherForm = React.createClass({


  onFormSubmit: function(event){
    event.preventDefault;
    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value ="";
      this.props.onSearch(location);
    }

  },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="location" placeholder="Search weather by city"></input>
        <button className="button hollow expanded">Get Weather</button>
      </form>

    );
  }
});

module.exports = WeatherForm;
