Dashboard = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Users collection and puts them on this.data.users
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
      <div>
        {this.renderUserList()}
      </div>
    );
  }
});
