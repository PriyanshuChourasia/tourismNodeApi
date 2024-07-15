const express = require('express');
const UserController = require('../../../controllers/UserController/UserController');
const userRouter = express.Router();    



userRouter.post('/register',UserController.register)




module.exports={
    userRouter
}