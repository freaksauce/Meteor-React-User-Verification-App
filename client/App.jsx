App = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      users: Users.find({}).fetch()
    }
  },

  renderUsers() {
    // Get Users from this.data.user
    return this.data.users.map((user) => {
      return <User key={user.rndStr} user={React.addons.createFragment(user)} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header><h1>User Verification App</h1></header>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
});
