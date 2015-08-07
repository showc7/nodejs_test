// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var express = require('express')
var app = express()
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
//module.exports = User;

console.log('started');

app.get('/', function(req,res){
  mongoose.connect('mongodb://localhost/myappdatabase');

  var chris = new User({
    name: 'Chris',
    username: 'sevilayha',
    password: 'password'
  });


})

app.listen(3000);
