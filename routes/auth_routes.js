const router = require("express").Router();
//const express = require("express");
var passport = require("../config/passport/passport.js");
//const authController = require("../controller/authController");
//var db = require("../models");
module.exports = function(passport,app) {

// 	router.use(function(req,res,next){
// 	console.log(req.method,req.url);
// 	next();
// });

app.post("/auth/signup",passport.authenticate('local-signup'),function(req,res){
	const {firstname,lastname,id} = req.body;
	console.log(firstname + lastname) ;
	//res.redirect("/user/profile");
	res.send("user signup authenticated!");
	//res.json(res.js);
});


app.post("/auth/signin",passport.authenticate('local-signin'),function(req,res){

	res.send("user signin authenticated!");
});


app.get("/logout", function (req, res) {
        req.session.destroy(function (err) {
            if (err) console.log(err)
            res.redirect('/');
        });
    });
}



//module.exports = router;
