FlowRouter.route("/", {
  name: 'home',
  subscriptions: function() {
    this.register('users', Meteor.subscribe('users'));
  },
  action: function() {
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

FlowRouter.route("/dashboard", {
  subscriptions: function() {
    this.register('users', Meteor.subscribe('users'));
  },
  action: function() {
    ReactLayout.render(Layout, {
      content: <Dashboard />
    });
  }
});

FlowRouter.route("/login", {
  subscriptions: function() {
    // this.register('users', Meteor.subscribe('users'));
  },
  action: function() {
    ReactLayout.render(Layout, {
      content: <Login />
    });
  }
});
