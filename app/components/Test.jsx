
module.exports = {
  runAlert: function (message){
    alert("Hello from Park City. " + message);
  }
};




// CANNOT Invoke Function outside of this scope
// var React = require('react');
//
// var Test = React.createClass({
//   runAlert: function (message){
//     alert("Hello from Park City. " + message);
//   },
//   render: function(){
//     return <h1>Hello World!</h1>
//   }
// });
//
// module.exports = Test;
