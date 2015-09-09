Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
    }
  },

  getInitialState: function() {
    return {
      validated: false,
      userData: null,
      errorObj: {heading: 'User validation error', message: 'The number that you have provided does not exist'},
      showError: false
    };
  },

  handleSubmit() {
    console.log('handleSubmit');
    // console.log(this.refs.userStr.getDOMNode().value);
    this.validateUser(
      this.refs.userStr.getDOMNode().value
    );
  },

  validateUser(rnd) {
    // console.log('rnd: '+rnd);
    var userData = Users.findOne({'rnd':parseInt(rnd)});
    if (userData !== undefined) {
      var userId = userData._id;
      this.setState({userData: userData});
      // console.log(userData._id);
      var userUpdate = Users.update({_id: userId}, {$set: {validated: 1} });
      // console.log('userUpdate: '+userUpdate);
      this.setState({validated: true});
    }else{
      console.log("ID doesn't exist");
      this.setState({showError: true});
    }
  },

  getErrorMessage() {
    if (this.state.showError === true) {
      return <ErrorMessage errorObj={this.state.errorObj} />
    }
  },

  getUserForm() {
    console.log(this.state.validated);
    if (this.state.validated === true) {
      console.log('render UserForm');
      return <UserForm userData={this.state.userData} />
    }
  },

  render() {

    return (
      <div>
        <h2 className="ui header">Home</h2>
        <p><a href="/dashboard">Dashboard</a></p>

        <div className="ui form segment">
          <div className="field">
            <label>User Random String</label>
            <input ref="userStr" type="text"/>
          </div>
          <div>
            <button className="ui primary submit button" onClick={this.handleSubmit}>Validate</button>
          </div>
        </div>

        {this.getErrorMessage()}

        {this.getUserForm()}

      </div>
    );
  }
});
