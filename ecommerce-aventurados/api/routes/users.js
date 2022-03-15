const express = require("express");
const router = express.Router();

const users_controllers = require("../controllers/users.controllers");
const { register, getUser, getOrders, deleteUser, addNewAdmin, getAllUsers } =
  users_controllers;

router.post("/register", register); //con problemas del lado del front

router.get("/me", getUser);

router.get("/me/orders", getOrders);

router.delete("/admin/:id", deleteUser);

router.put("/admin/:id", addNewAdmin);

router.get("/admin/users/:localId", getAllUsers);

module.exports = router;
