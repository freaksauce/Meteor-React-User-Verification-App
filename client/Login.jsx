Login = React.createClass({

  handleSubmit(e) {
    console.log(e.target);
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address"/>
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
            <div className="ui fluid large teal submit button" onClick={this.handleSubmit()}>Login</div>
          </div>

          <div className="ui error message"></div>

        </form>
      </div>
    );
  }
});
