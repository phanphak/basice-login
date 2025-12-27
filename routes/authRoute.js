const express = require("express");
const routes = express.Router();

// models auth controllers
const authControllers = require("../controllers/authController");

routes.post("/register", authControllers.register);


module.exports = routes;