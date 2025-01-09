const { JsonWebTokenError } = require("jsonwebtoken");
const { getUsers, saveUsers } = require("../models/userModel");
const client = require("../client");

const getAllUsers = (req, res) => {
  const users = getUsers();
  res.json(users);
};

const addUser = (req, res) => {
  const users = getUsers();
  users.push(req.body);
  saveUsers(users);
  res.status(201).send("User added successfully");
};

const getProfile = (req, res) => {
  // Access user information from `req.user` (set in middleware)
  const user = req.user;
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }
  res.json({ message: "User profile retrieved successfully.", user });
};

const getUsersJson = async (req, res) => {
  // check whether the cacheValue is present or not
  let cacheValue = await client.get("users");
  if (cacheValue) return res.json(cacheValue);
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  await client.set("users", JSON.stringify(data));
  await client.expire("users", 120);
  return res.json(data);
};

module.exports = { getAllUsers, addUser, getProfile, getUsersJson };
