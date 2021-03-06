const express = require("express");
// require("dotenv").config();
const routes = require("./routes");
const app = express();
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
app.use(routes);

//passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

// Static directory
//needs to be replaced with react index file
//may need to change to router.use and require const router = require("express").Router();
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


// Start the API server
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  });

