const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

router.post("/", createUser);   // create new user
router.get("/", getUsers);      // list all users

module.exports = router;