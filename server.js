const express = require("express");
require("dotenv").config();
const path = require('path');
const env = require('dotenv').load();
const passport   = require('passport');
//const routes = require("./routes/auth_routes");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/user",require("./routes/user_routes"));
app.use("/tasks",require("./routes/task_routes"));
// Load passport strategies
//require("./routes/user_routes.js")(app);

//passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions


require("./routes/auth_routes.js")(passport,app);
require("./config/passport/passport.js")(passport, db.Auth,db.User);
// Static directory
//needs to be replaced with react index file
//may need to change to router.use and require const router = require("express").Router();
// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });


// Start the API server
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });

