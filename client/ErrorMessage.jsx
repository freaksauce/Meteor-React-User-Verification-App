ErrorMessage = React.createClass({

  propTypes: {
    errorObj: React.PropTypes.object.isRequired
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
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
          {this.props.errorObj.heading}
        </div>
        <p>{this.props.errorObj.message}</p>
      </div>
    );
  }
});
