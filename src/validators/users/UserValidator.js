const userJoi = require('joi');

const UserValidatorSchema = userJoi.object({
    name: userJoi.string().min(3).required().messages({
        "string.base":"Should be a string type",
        "string.empty":"Name should not be left empty",
        "string.min":"Name should be more than 3 characters",
        "any.required":"Name is a required field"
    }),
    email: userJoi.string().email({minDomainSegments:2,tlds:{allow:['com','net','yahoo','in']}}).messages({
        "string.email":"Please enter a valid email address",
        "any.required":"Email field is required"
    }),
    password: userJoi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(8).messages({
        "string.pattern.base":"Password must contain at least one uppercase, one lowercase letter, and one digit",
        "any.required":"Password is required field"
    }),
    repeat_password: userJoi.any().valid(userJoi.ref('password')).required().messages({
        "any.only":"Repeat password must match password",
        "any.required":"Repeat password is a required field"
    }),
});




module.exports={
    UserValidatorSchema
}