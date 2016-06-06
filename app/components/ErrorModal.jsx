var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return {
      title: "Sorry, there has been an error",
      errorNote: "Unknown Error"
    };
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },


  render: function(){
    return(
      <div>
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{this.props.title}: {this.props.errorNote}</h4>
          <p>some text</p>
          <p>
            <button className="button hollow" data-close="">Okay</button>
          </p>
        </div>
        <p><a data-open="error-modal">Re-Open Error Message</a></p>
      </div>
    );
  }

});

module.exports = ErrorModal;
