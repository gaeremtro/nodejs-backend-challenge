import listController from "../controllers/listController";

const express = require("express");


const router = express.Router();

const {addList} = require('../methods/list')

router.post('/addList',listController().addList, addList);



module.exports = {routes:router}