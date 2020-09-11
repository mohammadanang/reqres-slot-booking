const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../src/app/models");
const app = express();
const path = require('path')

//const connection = "mongodb+srv://SattyamJain:<password>@cluster0.xo3id.mongodb.net/<slotBookDB>?retryWrites=true&w=majority";

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'))
})

require("../src/app/routes/slotBook.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});