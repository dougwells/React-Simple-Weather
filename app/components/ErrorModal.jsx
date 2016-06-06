var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function(){
    return {
      title: "Sorry, there has been an error.",
      errorNote: "Unknown Error"
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },


  render: function(){
    var {title, errorNote} = this.props;
    return(
      <div>
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <h5>{errorNote}</h5>
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
