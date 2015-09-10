Dashboard = React.createClass({

  mixins: [ReactMeteorData],

  // Loads items from the Customers collection and puts them on this.data.customers
  getMeteorData() {
    return {
      customers: Customers.find({}).fetch()
    }
  },

  renderCustomerList() {
    return <CustomerList customers={this.data.customers} />;
  },

  render() {
    return (
      <div>
        {this.renderCustomerList()}
      </div>
    );
  }
});
