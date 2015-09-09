UserForm = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
  },

  handleChange() {
    console.log('handle change');
  },

  render() {

    return (

        <div className="ui segment form">
          <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
          </h2>
          <h3 className="ui header">hidden form</h3>
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
