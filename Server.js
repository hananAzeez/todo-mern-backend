const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./Routes/ToDoRoute");

require("dotenv").config();
const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGODB_URL, connectionParams);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

app.use(routes);
database();
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
