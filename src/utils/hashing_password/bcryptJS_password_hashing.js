const bcryptPass = require('bcryptjs');


/**
 * 
 * @param {String | Number} string_input 
 * @returns {Promise<String>}
 */


async function Hash(string_input){
    const saltRounds = 8;
    try{
        const salt = await bcryptPass.genSalt(saltRounds);
        const hashedPassword = await bcryptPass.hash(string_input,salt);
        return hashedPassword;
    }catch(error){
        throw new Error('Error in hashing password');
    }
}



module.exports={
    Hash
}

