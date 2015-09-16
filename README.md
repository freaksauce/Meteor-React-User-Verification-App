# Meteor React User Verification App
A React App with Meteor using Kadira's Flow Router and ReactLayout + Semantic UI.

This app is a simple proof of concept for me switching out Meteor's default Blaze template layer for Facebook's React. This has allowed me to take more of a web components style approach (similar to how it could be built using Google Polymer) which also made it much easier to structure.

The idea is that a customer has been sent a Verification id number to use on the site to validate their user account, they are then presented with a form to update their basic profile details.

A single admin user has been set up which allows access to the /dashboard page. In order to login follow the instructions on the login page, copy a "Random num" from a customer that is not currently validated (0 not 1) and then paste into the field on the home page and submit.

Demo site: http://freaksauce-react-verification.meteor.com/
