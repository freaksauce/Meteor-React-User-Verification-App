CustomerProfile = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <tr>
        <td>{this.props.userData.name}</td>
        <td>{this.props.userData.email}</td>
        <td>{this.props.userData.username}</td>
        <td>{this.props.userData.password}</td>
        <td>{this.props.userData.rnd}</td>
        <td>{this.props.userData.validated}</td>
      </tr>
    );
  }

});
