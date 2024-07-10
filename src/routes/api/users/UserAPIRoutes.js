const express = require('express');
const UserController = require('../../../controllers/UserController/UserController');
const userRouter = express.Router();    



userRouter.get('/register')




module.exports={
    userRouter
}