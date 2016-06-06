var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) =>
  <div>
    <h1 className="text-center page-title">About</h1 >
    <p>Weather Application using React & Foundation</p>
    <p>Tools used include:</p>
    <li>
      <a href="https://facebook.github.io/react">React</a>
       - JavaScript framework used.
    </li>
    <li>
      <a href="http://openweathermap.org">OpenWeatherMap</a>
       - API used to search for weather by city name.
    </li>
  </div>

module.exports = About
