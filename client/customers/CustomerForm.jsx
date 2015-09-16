CustomerForm = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      success: false
    }
  },

  updateUserProfile() {
    console.log('update profile');
    var userData = {};
    userData.userId = this.props.userData._id;
    userData.name = this.refs.name.getDOMNode().value;
    userData.username = this.refs.username.getDOMNode().value;
    userData.email = this.refs.email.getDOMNode().value;
    userData.password = this.refs.password.getDOMNode().value;
    Meteor.call('updateProfile', userData, (error, result) => {
      if (error) {
        console.log(error);
      }else{
        this.setState({'success': true});
      }
    });
  },

  getSuccessMessage() {
    if (this.state.success === true) {
      var messageContent = {heading: 'Update success', message: 'User details updated'};
      return <Message messageType="success" messageContent={messageContent} />
    }
  },

  render() {
    return (
      <div>
        {this.getSuccessMessage()}

        <div className="ui segment form">
          <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
          </h2>
          <h3 className="ui header">Update user details</h3>
          <div className="field">
            <label>Name</label>
            <input ref="name" defaultValue={this.props.userData.name} />
          </div>
          <div className="field">
            <label>Username</label>
            <input ref="username" defaultValue={this.props.userData.username} />
          </div>
          <div className="field">
            <label>Email</label>
            <input ref="email" defaultValue={this.props.userData.email} readonly="readonly" />
          </div>
          <div className="field">
            <label>Password</label>
            <input ref="password" defaultValue={this.props.userData.password} />
          </div>
          <div>
            <button className="ui primary submit button" onClick={this.updateUserProfile}>Update</button>
          </div>
        </div>

      </div>
    );
  }

});
