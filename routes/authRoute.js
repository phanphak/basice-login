const express = require("express");
const routes = express.Router();
const authControllers = require("../controllers/authController");
const categoryController = require("../controllers/categoryController")

// rout login and register
routes.post("/register", authControllers.register);
routes.post("/login", authControllers.login);

// rout category
routes.get("/allProduct", categoryController.getAllProduct);
routes.post("/creatProduct",categoryController.createProduct);

module.exports = routes;
