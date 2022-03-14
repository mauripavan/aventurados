const express = require("express");
const router = express.Router();

const products_controllers = require("../controllers/products.controllers");
const { getAll, getOne, addProduct, deleteOne, editProduct, search } =
  products_controllers;

router.get("/search", search);

router.get("/", getAll);

router.get("/:id", getOne);

//Routes for admin
router.post("/", addProduct);

router.delete("/:id", deleteOne);

router.put("/:id", editProduct);

module.exports = router;
