//require models folder here

var db = require("../models");
//defining methods for the controller
//double check findbyID function for req.params.id

module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.User
            .findAll({where: {id:req.params.id}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
        
    }
};