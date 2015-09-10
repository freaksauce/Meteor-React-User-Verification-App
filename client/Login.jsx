Login = React.createClass({

  handleSubmit(e) {
    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    console.log(email+' '+password);

    e.preventDefault();
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
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

          <div className="ui error message"></div>

        </form>
      </div>
    );
  }
});
