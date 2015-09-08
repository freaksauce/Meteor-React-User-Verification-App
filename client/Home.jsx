Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
    }
  },

  getInitialState: function() {
    return {validated: false};
  },

  handleSubmit() {
    console.log('handleSubmit');
    // console.log(this.refs.userStr.getDOMNode().value);
    this.validateUser(
      this.refs.userStr.getDOMNode().value
    );
  },

  validateUser(rnd) {
    console.log('rnd: '+rnd);
    var userData = Users.findOne({'rnd':parseInt(rnd)});
    var userId = userData._id;
    console.log(userData._id);
    Users.update({_id: userId}, {$set: {validated: 1} });
    this.setState({validated: true});
  },

  render() {
    var formClass = this.state.validated ? '' : 'hidden';

    return (
      <div>
        <h2 className="ui header">Home</h2>
        <p><a href="/dashboard">Dashboard</a></p>

        <div className="ui form segment">
          <div className="field">
            <label>User Random String</label>
            <input ref="userStr" type="text"/>
          </div>
          <div>
            <button className="ui primary submit button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>

        <div className={formClass}>
          <div className="ui segment form">
            <h2 className="ui center aligned icon header">
              <i className="circular users icon"></i>
            </h2>
            <h3 className="ui header">hidden form</h3>
            <div className="field">
              <label>Name</label>
              <input ref="name" value="" />
            </div>
            <div className="field">
              <label>Email</label>
              <input ref="email" value="" />
            </div>
            <div className="field">
              <label>Password</label>
              <input ref="password" value="" />
            </div>
            <div>
              <button className="ui primary submit button" onClick={this.updateUserProfile}>Update</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
});
