Login = React.createClass({

  getInitialState: function() {
    return {
      errorObj: {heading: 'User Login error', message: 'The user login details do not match our records'},
      showError: false
    };
  },

  handleSubmit(e) {
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    // console.log(email+' '+password);

    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        // console.log(err);
        this.showError();
      }else{
        // The user has been logged in.
        FlowRouter.go("/dashboard");
      }
    });

    e.preventDefault();
  },

  getErrorMessage() {
    if (this.state.showError === true) {
      return <Message messageType="negative" messageContent={this.state.errorObj} hideErrorMessage={this.hideErrorMessage} />
    }
  },

  hideErrorMessage() {
    // console.log("hideErrorMessage");
    this.setState({showError: false});
  },

  showError() {
    this.setState({showError:true});
  },

  render() {
    return (
      <div className="ui container text">
        <h1>Login</h1>
        <p>email: jon@freaksauce.com<br/>password: password</p>

        <form className="ui large form" onSubmit={this.handleSubmit}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" ref="email" placeholder="E-mail address"/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" ref="password" placeholder="Password"/>
              </div>
            </div>
            <div>
              <input className="ui fluid large teal submit button" type="submit" value="Login" />
            </div>
          </div>

          {this.getErrorMessage()}

        </form>
      </div>
    );
  }
});
