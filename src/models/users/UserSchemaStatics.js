const { User } = require("./UserSchema");






async function checkExsistingUser(email){
    let exisitingUser = await User.findByUserEmail(email);
    if(exisitingUser){
        return true;
    }else{
        return false;
    }
}








module.exports={
    checkExsistingUser
}