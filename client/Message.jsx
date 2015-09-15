Message = React.createClass({

  propTypes: {
    messageType: React.PropTypes.string.isRequired,
    messageContent: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      messageClasses: "ui message "+this.props.messageType
    }
  },

  componentDidMount() {
    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .fadeOut('fast');
      });
  },

  render() {
    return (
      <div className={this.state.messageClasses}>
        <i className="close icon"></i>
        <div className="header">
          {this.props.messageContent.heading}
        </div>
        <p>{this.props.messageContent.message}</p>
      </div>
    );
  }
});
