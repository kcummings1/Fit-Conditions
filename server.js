require('dotenv').config()
const express = require('express');
const app = express();
//const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const mongojs= require("mongojs")
// var mong = mongojs('FitnessConditionsApp', ["Workouts"])

// mong.Workouts.find({}, (err, found)=>console.log( "mong",found.forEach(element => {
//  console.log(element)
// })))

mongoose
  // .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/FitnessConditionsApp', {useNewUrlParser: true, useCreateIndex: true})
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/FitnessConditionsApp', { useNewUrlParser: true, useCreateIndex: true })
  .then((data) => console.log("MongoDB Connected!"))//, data))
  .catch(err => console.error(err));

//   db.Workout.find({}).then((database)=>console.log(database))
//   db.Workout.findOne().lean().exec(function(err, doc) {
//     console.log(doc);
// });
// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  console.log('Pinged API sign up route');
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(400).json(err.message)
    });
});

<<<<<<< HEAD
//add routes to Indoor Workouts here
app.get('/api/indoorworkout', (req, res) => {
   console.log("hello")
  db.Workout.find().then(data => {
    res.json(data);
  })
});



//Add routes to Outdoor Workouts here
app.get('/api/outdoorWorkouts', (req, res) => {
  console.log(req.body)
  db.Workout.find(Type.OutdoorWorkout)
=======

app.get('/dataentry', (req,res)=>{
  res.sendFile("public/dataentry.html")
})
app.post('/addExercise', (req,res)=>{
  console.log("we're geting something",req.body)
  db.Exercise.create(req.body).then(data=>res.json(data))
>>>>>>> 66edfba3fcc9f1936bc9d7fc3db90d550afe008c
})


// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
