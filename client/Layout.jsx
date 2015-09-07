Layout = React.createClass({
  render() {
    return (
      <div className="ui container">
        <header><h1>User Verification App</h1></header>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
});
