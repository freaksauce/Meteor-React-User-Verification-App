Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <div className="ui container">
          <header className="ui"><h1 className="ui center aligned header">User Verification App</h1></header>
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
