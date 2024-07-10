const express = require('express');
const tourismApiRoutes = express();
const {userRouter}  = require('./api/users/UserAPIRoutes');


tourismApiRoutes.use(userRouter);




module.exports ={
    tourismApiRoutes
};