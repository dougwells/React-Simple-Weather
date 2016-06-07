var React = require('react');
var {Link} = require('react-router')

var Examples = (props)=>
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Have you checked the weather for any of these cities yet?</p>
    <ol>
      <li><Link to="/?city=Boston">Boston</Link></li>
      <li><Link to="/?city=Miami">Miami</Link></li>
      <li><Link to="/?city=Cleveland">Cleveland</Link></li>
      <li><Link to="/?city=Chicago">Chicago</Link></li>
      <li><Link to="/?city=Denver">Denver</Link></li>
      <li><Link to="/?city=Seattle">Seattle</Link></li>
    </ol>
    </div>

module.exports = Examples
