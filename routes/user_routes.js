const router = require("express").Router();
const passport = require("../config/passport/passport.js");
// var db = require("../models");
//const authController = require("../controller/authController");
const userController = require("../controller/userController")
const taskController = require("../controller/taskController")

router.use(function(req,res,next){
	console.log("***** " + req.method + " requested on url " + req.url + " ******");
	next();
});

router.get("/check",function(req,res){
	res.send("check passed!");
});

// router.get("/dashboard/:id",function(req,res){
// 	res.send("hello " + req.params.id);
// })
// check for isLoggedIn 
router.get('/dashboard/:id',userController.findById)




function isLoggedIn(req, res, next) {
	console.log("req.isAuthenticated()",req.isAuthenticated());
 
    if (req.isAuthenticated())
        
        return next();
         
    res.redirect('/signin');
 
}

module.exports = router;
