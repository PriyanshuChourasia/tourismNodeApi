const express = require('express');
const UserController = require('../../../controllers/UserController/UserController');
const userRouter = express.Router();    



userRouter.post('/register',UserController.register);

userRouter.post('/auth')




module.exports={
    userRouter
}