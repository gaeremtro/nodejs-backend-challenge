import listController from "../controllers/listController";

const express = require("express");


const router = express.Router();
const authController = require('../controllers/authController');

const {addList, getList} = require('../methods/list')

router.post('/addList',listController().addList, addList);

router.get('/list', authController, listController().getList, getList)



module.exports = {routes:router}