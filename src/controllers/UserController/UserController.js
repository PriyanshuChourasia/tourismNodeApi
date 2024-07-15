const { VerifyUserRegisterRequestMiddleware } = require('../../middlewares');
const { User } = require('../../models/users/UserSchema');
const { checkExsistingUser } = require('../../models/users/UserSchemaStatics');
const ApiResponse = require('../../resources/api_Response_Resources/ApiResponse');
const { isRequestEmpty } = require('../../utils/api_request_check/api_request_check');

class UserController {

    async register(req, res) {
        const status = await isRequestEmpty(req);
        if (!status) {
            return res.status(400).json({
                error:"Request body cannot be empty",
                success:"false"
            })
        }else{
            const Validatedresponse = await VerifyUserRegisterRequestMiddleware.verifyUserRequest(req, res);
            if (Validatedresponse) {

              const userExists = await checkExsistingUser(Validatedresponse.email);
                

                // const user = User.create({
                //     name: Validatedresponse.name,
                //     email:Validatedresponse.email,
                //     password:Validatedresponse.password
                // })
                ApiResponse.ApiResourceResponse(res, 200, Validatedresponse);
            }
        }
    }

}


module.exports = new UserController();





