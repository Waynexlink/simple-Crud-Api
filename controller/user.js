const uuid = require("uuid");

let user = [];

const viewUsers = (req, res) => {
  res.send(user);
};

const createUser = (req, res) => {
  const newUser = req.body;
  user.push({ ...newUser, id: uuid.v4() });

  res.send(`added new user: ${newUser.name}`);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const FoundedUsr = user.find((el) => el.id === id);
  res.send(FoundedUsr);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  user = user.filter((el) => el.id !== id);
  res.send(`user:${id} has been removed`);
};

const editaUser = (req, res) => {
  const { id } = req.params;
  const { name, surname, age } = req.body;
  user = user.find((el) => el.id === id);
  if (name) editUser.name = name;
  if (surname) editUser.surname = surname;
  if (age) editUser.age = age;
};

module.exports = { viewUsers, createUser, getUserById, deleteUser, editaUser };
