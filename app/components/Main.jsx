var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var Main = (props)=> (
      <div>
        <Nav />
        <div className="row">
            <div className ='column medium-6 large-4 small-centered'>
              {props.children}
            </div>
        </div>
      </div>
      );


module.exports = Main;
