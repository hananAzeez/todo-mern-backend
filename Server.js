const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./Routes/ToDoRoute");

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
    mongoose.connect(
      "mongodb+srv://hananazeez:rfk3PvilzO0SSPga@todo-app.phqwko5.mongodb.net/todo?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

app.use(routes);
database();
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
