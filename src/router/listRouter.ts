import listController from "../controllers/listController";
import authController  from '../controllers/authController';

const express = require("express");

const router = express.Router();

const {addList, getList} = require('../methods/list')


router.post('/addList',listController().addList, addList);

router.get('/getlist', authController, listController().getList, getList)



module.exports = {routes:router}