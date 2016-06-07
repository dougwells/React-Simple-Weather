var React = require('react');
var {Link, IndexLink} = require('react-router');
// var handleSearch = require('Weather').handleSearch;
// var runAlert = require('Test').runAlert;
// console.dir(handleSearch);
// console.dir(runAlert);

var Nav = React.createClass({

  onSearch: function(event){
    event.preventDefault();
    // alert(this.refs.location.value);
    // Weather.handleSearch(this.refs.location.value);
  },

  render: function(){
    return (
      <div className="top-bar">

        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search weather by city" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>

            </ul>
          </form>

        </div>

        </div>

    );
  }
});


module.exports = Nav
