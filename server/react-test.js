Meteor.startup(function() {
  // Create in 25 fake users.

  Users.remove({});

  _.each(_.range(25), function(){
    var randomEmail = faker.internet.email();
    var randomName = faker.name.findName();
    var userName = faker.internet.userName();
    var rndStr = faker.helpers.randomize();
    var userObj = {
      name: randomName,
      email: randomEmail,
      password: 'password',
      rndStr: faker.random.number(100000)
    }
    Users.insert(userObj);
  });
  // console.log(Users.find().fetch());

});

Meteor.methods({

});
