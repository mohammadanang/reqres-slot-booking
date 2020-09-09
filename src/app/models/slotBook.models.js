const sql = require("./db.js");

const slotBook = function(slotBook) {
  this.id = slotBook.id;
  this.email = slotBook.email;
  this.name = slotBook.name;
  this.mobile_no = slotBook.mobile_no;
  this.votes = slotBook.votes;
  this.level = slotBook.level;
};

slotBook.create = (newSlotBook, result) => {
  sql.query("INSERT INTO slotBook SET ?", newSlotBook, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created candidate: ", { ...newSlotBook });
    result(null, {...newSlotBook });
  });
};
