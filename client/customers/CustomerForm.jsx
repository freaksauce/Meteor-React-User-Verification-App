CustomerForm = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  updateUserProfile() {
    console.log('update profile');
    var userData = {};
    userData.userId = this.props.userData._id;
    userData.name = this.refs.name.getDOMNode().value;
    userData.email = this.refs.email.getDOMNode().value;
    userData.password = this.refs.password.getDOMNode().value;
    Meteor.call('updateProfile', userData);
  },

  render() {

    return (

        <div className="ui segment form">
          <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
          </h2>
          <h3 className="ui header">Update user details</h3>
            <label>Name</label>
          <div className="field">
            <input ref="name" defaultValue={this.props.userData.name} />
          </div>
          <div className="field">
            <label>Email</label>
            <input ref="email" defaultValue={this.props.userData.email} />
          </div>
          <div className="field">
            <label>Password</label>
            <input ref="password" defaultValue={this.props.userData.password} />
          </div>
          <div>
            <button className="ui primary submit button" onClick={this.updateUserProfile}>Update</button>
          </div>
        </div>

    );
  }

});
