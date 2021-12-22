
import authController from "../controllers/authController";
import userController from "../controllers/UserController";

const express = require("express");


const router = express.Router();

const {register} = require('../methods/user')

router.post('/register',userController().register, register);





module.exports = {routes:router}