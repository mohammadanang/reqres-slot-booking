module.exports = app => {
    const slotBook = require("../controller/slotBook.controller.js");
  
    var router = require("express").Router();
  
    router.post("/slotBook", slotBook.create);

    router.get("/slotBook", slotBook.findAll);

    app.use('/api', router);
}