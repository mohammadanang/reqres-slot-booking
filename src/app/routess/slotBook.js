module.exports = app => {
    const slotBook = require("../controller/slotBook.controller.js");

    app.post("/slotBook", slotBook.create);
};