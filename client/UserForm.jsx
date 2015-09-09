UserForm = React.createClass({

  propTypes: {
    userData: React.PropTypes.object.isRequired
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

    );
  }

});
