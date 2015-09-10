CustomerList = React.createClass({

  propTypes: {
    customers: React.PropTypes.array.isRequired
  },

  getCustomers() {
    return this.props.customers.map((customer) => {
      // console.log(user);
      return <CustomerProfile key={customer._id} userData={customer} />;
    });
  },

  render() {
    return (
        <table className="ui celled table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Random Num</th>
            <th>Validated</th>
          </tr>
          </thead>
          <tbody>
          {this.getCustomers()}
          </tbody>
        </table>
    );
  }
});
