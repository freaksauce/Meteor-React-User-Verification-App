App = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      users: Users.find({}).fetch()
    }
  },

  renderTasks() {
    // Get tasks from this.data.user
    return this.data.tasks.map((user) => {
      return <User key={user._id} userProfile={user} />;
    });
  },

});
