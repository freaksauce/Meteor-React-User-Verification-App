UserList = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired
  },

  getUsers() {
    return this.props.users.map((user) => {
      // console.log(user);
      return <UserProfile key={user._id} userData={user} />;
    });
  },

  render() {
    return (
        <table className="ui celled table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Random Num</th>
            <th>Validated</th>
          </tr>
          </thead>
          <tbody>
          {this.getUsers()}
          </tbody>
        </table>
    );
  }
});
