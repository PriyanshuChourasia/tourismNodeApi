const {Hash} = require('./hashing_password/bcryptJS_password_hashing'); /** Function to Hash password */

/**
 * This function module requires two input
 */
const {uniqueUsernameString} = require('./unique_string/unique_String');







module.exports={
    Hash,
    uniqueUsernameString
}