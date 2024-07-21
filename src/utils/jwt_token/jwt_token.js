const jwt = require('jsonwebtoken');
const {JWTKEY} = require('../variables/variables');




async function getJWTtoken(user_id){
    try{
        const token = jwt.sign(
            {
                id: user_id,
            },
            JWTKEY,
            {
                expiresIn: '1h',
            }
        );
        return token;
    }catch(error){
        throw new Error('Token cannot be generated');
    }
}




module.exports={
    getJWTtoken
}