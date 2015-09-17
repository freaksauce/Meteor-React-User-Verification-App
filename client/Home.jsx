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
      showError: false,
      errorType: null
    };
  },

  handleSubmit() {
    console.log('handleSubmit');
    // console.log(this.refs.customerStr.getDOMNode().value);
    this.validateUser(
      this.refs.customerStr.getDOMNode().value
    );
  },

  validateUser(rnd) {
    // console.log('rnd: '+rnd);
    var customerData = Customers.findOne({'rnd':parseInt(rnd)});

    if (customerData !== undefined) {
      // if already valdated show error
      if (customerData.validated === 1) {
        this.setState({showError: true, errorType: 1});
        return;
      }

      var userId = customerData._id;
      this.setState({customerData: customerData});
      // console.log(userData._id);
      Meteor.call("validateCustomer", userId);
      this.setState({validated: true});
    }else{
      // console.log("ID doesn't exist");
      this.setState({showError: true, errorType: 2});
    }
  },

  getErrorMessage() {
    if (this.state.showError === true) {
      if (this.state.errorType === 1) {
        var messageContent = {heading: 'User validation error', message: 'The number you entered has already been validated.'};
      }else if (this.state.errorType === 2) {
        var messageContent = {heading: 'User validation error', message: 'You have entered an invalid user number.'};
      }
      return <Message messageType="negative" messageContent={messageContent} />
    }
  },

  getUserForm() {
    // console.log(this.state.validated);
    if (this.state.validated === true) {
      console.log('render UserForm');
      return <CustomerForm userData={this.state.customerData} />
    }
  },

  render() {

    return (
      <div>

        <div className="ui container text">

          <h2 className="ui header">Home</h2>

          <div className="ui form segment">
            <div className="field">
              <label>User Random String</label>
              <input ref="customerStr" type="text"/>
            </div>
            <div>
              <button className="ui primary submit button" onClick={this.handleSubmit}>Validate</button>
            </div>
          </div>

        {this.getErrorMessage()}

        {this.getUserForm()}

        </div>

      </div>
    );
  }
});
