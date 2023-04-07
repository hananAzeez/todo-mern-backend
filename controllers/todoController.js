const todoModel = require("../model/todoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.createTodo = async (req, res) => {
  const { title, description, tags } = req.body;
  todoModel
    .create({
      title,
      description,
      tags,
    })
    .then((data) => {
      console.log("Added successfully");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateTodo = async (req, res) => {
  const { _id, title, description, tags } = req.body;

  await todoModel
    .findByIdAndUpdate(_id, { title, description, tags })
    .then(() => res.status(201).send("Updated Successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;

  await todoModel
    .findByIdAndDelete(_id)
    .then(() => res.status(201).send("Deleted Successfully"))
    .catch((err) => console.log(err));
};
