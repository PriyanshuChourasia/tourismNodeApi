const {Hash} = require('./hashing_password/bcryptJS_password_hashing'); /** Function to Hash password */

/**
 * This function module requires two input
 */
const {uniqueUsernameString} = require('./unique_string/unique_String');


/***
 * This Function generates JWT Token
 */
const {getJWTtoken} = require('./jwt_token/jwt_token');







module.exports={
    Hash,
    uniqueUsernameString,
    getJWTtoken
}