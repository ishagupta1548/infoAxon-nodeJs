const express = require("express");
const {
  getAllUsers,
  addUser,
  getProfile,
  getUsersJson,
} = require("../controllers/userController");
// const validateInput = require("../middlewares/validateInput");
const { validateUser } = require("../middlewares/validateUser");
const authenticateUser = require("../middlewares/auth");
const { loginUser } = require("../controllers/login");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/users", getUsersJson);
router.post("/", validateUser, addUser);
router.post("/login", loginUser);

// Protected Route

router.get("/userinfo", authenticateUser, getProfile);

module.exports = router;
