const express = require("express");
const routes = express.Router();
const authControllers = require("../controllers/authController");

routes.post("/register", authControllers.register);
routes.post("/login", authControllers.login);

module.exports = routes;
