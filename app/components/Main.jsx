var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <Nav />
        <h2>Main Component</h2>
        {this.props.children}
      </div>
      );
  }
});

module.exports = Main;
