import listController from "../controllers/listController";
import authController  from '../controllers/authController';

const express = require("express");

const router = express.Router();

const {addList, getList,getAllLists} = require('../methods/list')


router.post('/addList',authController,listController().addList, addList);

router.get('/getlist', authController, listController().getList, getList)


router.get('/getalllists', authController, listController().getAllLists, getAllLists)



module.exports = {routes:router}