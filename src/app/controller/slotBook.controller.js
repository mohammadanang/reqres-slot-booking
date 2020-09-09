const slotBook = require("../models/slotBook.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const SlotBook = new slotBook({
        id:req.body.id,
        email: req.body.email,
        name: req.body.name,
        mobile_no: req.body.mobile_no,
        votes: req.body.votes,
        level: req.body.level,
      });
    
      SlotBook.create(slotBook, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the candidate."
          });
        else res.send(data);
      });
};