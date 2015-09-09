ErrorMessage = React.createClass({

  propTypes: {
    errorObj: React.PropTypes.object.isRequired
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
