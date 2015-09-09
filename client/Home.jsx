Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
    }
  },

  getInitialState: function() {
    return {
      validated: false,
      userData: null
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
    console.log('rnd: '+rnd);
    var userData = Users.findOne({'rnd':parseInt(rnd)});
    var userId = userData._id;
    this.setState({userData: userData});
    console.log(userData._id);
    Users.update({_id: userId}, {$set: {validated: 1} });
    this.setState({validated: true});
  },

  getUserForm() {
    if (this.state.validated == true) {      
      <UserForm userData={this.state.userData} />
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
            <button className="ui primary submit button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>

        {this.getUserForm()}

      </div>
    );
  }
});
