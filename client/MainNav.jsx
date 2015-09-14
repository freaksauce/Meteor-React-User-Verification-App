MainNav = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  getDashboardClasses() {
    console.log(this.data.currentUser);
    if (this.data.currentUser) {
      return 'item';
    }else{
      return 'item hidden';
    }
  },

  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="header item">
            User Verification App
          </div>
          <a href="/" className="item">Home</a>
          <a href="/login" className="item">Login</a>
          <a href="/dashboard" className={this.getDashboardClasses()}>Dashboard</a>
        </div>
      </div>
    );
  }
});
