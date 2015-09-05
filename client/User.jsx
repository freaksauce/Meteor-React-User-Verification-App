User = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render() {

    return (
        <li>{this.props.user}</li>
    );

  }
});
