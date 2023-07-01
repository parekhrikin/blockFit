const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.post("/addUser", function (req, res) {
  //Check if all fields are provided and are valid:
  if (!req.body.walletId) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var newId = req.body.walletId;

    User.push({
      id: newId,
      name: req.body.name,
    });

    res.json({ message: "New user created" });
  }
});

router.get("/signin", function (req, res) {
  if (!req.body.walletId) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    User.findOne({
      walletId: req.body.walletId,
    })
      .then((user) => {
        if (!user) {
          return res.status(422).json({ error: "Invalid Email or password" });
        }

        const { _id, name, walletId } = user;

        return res.json({ user: { _id, name, walletId }});
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
