var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// HTML
router.all("/", function (req, res) {
  let notEatenBurger;
  let eatenBurger;
  burger.read("devoured = FALSE", function (notEaten) {
    notEatenBurger = notEaten;
    burger.read("devoured = TRUE", function (Eaten) {
      eatenBurger = Eaten;
      let burgerObj = { notEatenBurger: notEatenBurger, eatenBurger: eatenBurger }
      res.render("index", burgerObj)
    })
  })
});


// API
router.post("/api/burger", function(req, res) {
  //console.log(`name is ${req.body.name}`)
  burger.create("burger_name", [req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
});


router.put("/api/burger/:id", function(req, res) {
  let condition = "burger_id = " + req.params.id;

  console.log("condition", condition);

  burger.update({devoured: 'TRUE'}, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
