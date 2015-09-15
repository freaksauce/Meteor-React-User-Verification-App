Meteor.publish("customers", function () {
  return Customers.find();
});

Meteor.startup(function() {
  // Create in 25 fake users.

  Customers.remove({});

  _.each(_.range(25), function(){
    var randomEmail = faker.internet.email();
    var randomName = faker.name.findName();
    var userName = faker.internet.userName();
    var rnd = faker.random.number(100000);
    var userObj = {
      name: randomName,
      email: randomEmail,
      username: userName,
      password: 'password',
      rnd: rnd,
      validated: 0
    }
    Customers.insert(userObj);
  });

  if ( Meteor.users.find().count() === 0 ) {
    var userId = Accounts.createUser({
        username: 'admin',
        email: 'jon@freaksauce.com',
        password: 'password',
        profile: {
            first_name: 'Jon',
            last_name: 'Bloomer',
        }
    });
  }
  // console.log(Meteor.users.find().fetch());
});

Meteor.methods({

  validateCustomer: function(userId) {
    Customers.update({_id: userId}, {$set: {validated: 1} });
  },
  updateProfile: function(userData) {
    // console.log(userData);
    console.log('updateProfile');
    Customers.update({_id: userData.userId}, {$set: {name: userData.name, email: userData.email, password: userData.password} }, function(error) {
      if (error) {
        console.log(error);
      }else{
        return true;
      }
    });
    console.log(Customers.findOne(userData.userId));
  }

});
