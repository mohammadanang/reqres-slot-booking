const db = require("../models");
const SlotBook = db.slotBook;

exports.create = (req, res) => {
  const slotBook = new SlotBook({
    fullName: req.body.fullName,
    email: req.body.email,
    startDate: req.body.startDate,
    endDate:req.body.endDate,
    booked: req.body.booked ? req.body.booked : false
  });

  // Save Tutorial in the database
  slotBook
    .save(slotBook)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while booking the slot."
      });
    });
};

exports.findAll = (req, res) => {
  SlotBook.find((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving booking."
        });
      else res.send(data);
    });
};