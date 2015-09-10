MainNav = React.createClass({
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="header item">
            User Verification App
          </div>
          <a href="/" className="item">Home</a>
          <a href="/login" className="item">Login</a>
        </div>
      </div>
    );
  }
});
