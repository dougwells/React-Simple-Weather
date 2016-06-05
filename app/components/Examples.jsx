var React = require('react');
var {Link} = require('react-router')

var Examples = (props)=>
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Have you checked the weather for any of these cities yet?</p>
    <ol>
      <li><Link to="/?location=Boston">Boston</Link></li>
      <li><Link to="/?location=Miami">Miami</Link></li>
      <li><Link to="/?location=Denver">Cleveland</Link></li>
      <li><Link to="/?location=Chicago">Chicago</Link></li>
      <li><Link to="/?location=Denver">Denver</Link></li>
      <li><Link to="/?location=Seattle">Seattle</Link></li>
    </ol>
    </div>

module.exports = Examples
