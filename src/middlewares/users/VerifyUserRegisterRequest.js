const ApiResponse = require("../../resources/api_Response_Resources/ApiResponse");
const { UserValidatorSchema } = require("../../validators/ValidatorSchemas");



class VerifyUserRegisterRequest{

    async verifyUserRequest(request,response){
        try{
            const {name,email,password,repeat_password} = request.body;
            const userObject = {
                name:name,
                email:email,
                password:password,
                repeat_password:repeat_password
            }
            const {error,value} = UserValidatorSchema.validate(userObject,{abortEarly:false});
            if(error)
            {
                throw new Error(error);
            }else{
                return value;
            }
        }catch(error){
            ApiResponse.ApiResourceErrorResponse(response,400,error);
        }
    }

}


module.exports = new VerifyUserRegisterRequest();
