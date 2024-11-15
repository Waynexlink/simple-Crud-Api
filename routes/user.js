//intializing Express
const express = require("express");

const router = express.Router();

//import uuid

const {
  viewUsers,
  createUser,
  getUserById,
  deleteUser,
  editaUser,
} = require("../controller/user.js");
//intialize mock database

/*CRUD OPERATION*/

//GET
router.get("/", viewUsers);
//POST
router.post("/", createUser);
//GETBYID
router.get("/:id", getUserById);
//DELETE
router.delete("/:id", deleteUser);
//PATCH(EDIT USER PARTIALLY)
router.patch("/:id", editaUser);

module.exports = router;
