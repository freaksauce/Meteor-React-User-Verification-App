App = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      users: Users.find({}).fetch()
    }
  },

  renderUserList() {
    return <UserList users={this.data.users} />;
  },

  render() {
    return (
      <div className="container">
        <header><h1>User Verification App</h1></header>
        {this.renderUserList()}
      </div>
    );
  }
});
