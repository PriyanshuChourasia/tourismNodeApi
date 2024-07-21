const { VerifyUserRegisterRequestMiddleware } = require('../../middlewares');
const { Token } = require('../../models/tokens/TokenSchema');
const { User } = require('../../models/users/UserSchema');
const { checkExsistingUser } = require('../../models/users/UserSchemaStatics');
const ApiResponse = require('../../resources/api_Response_Resources/ApiResponse');
const { getJWTtoken } = require('../../utils');
const { isRequestEmpty } = require('../../utils/api_request_check/api_request_check');
const { APIResponseCode } = require('../../utils/status_Codes/Response_Status_Codes');


class UserController {
  async register(req, res) {
    const status = await isRequestEmpty(req);
    if (!status) {
      return res.status(400).json({
        error: "Request body cannot be empty",
        success: "false"
      })
    } else {
      const Validatedresponse = await VerifyUserRegisterRequestMiddleware.verifyUserRequest(req, res);
      if (Validatedresponse) {

        const userExists = await checkExsistingUser(Validatedresponse.email);
        if (userExists) {
          ApiResponse.ErrorResponse(res, APIResponseCode.Request_Conflict, "User Already Exists");
        } else if (!userExists) {
          const user = await User.create({
            name: Validatedresponse.name,
            email: Validatedresponse.email,
            password: Validatedresponse.password,
            username: Validatedresponse.username
          });

          if (user) {
            const token = await Token.create({
              name: user._id,
              token: await getJWTtoken(user._id),
              expires_at: new Date()
            });
            const userDetail = {
              "user": user,
              "access_Token": token.token
            };
            ApiResponse.SuccessResponse(res, APIResponseCode.Success, userDetail);
          }
        }
      }
    }
  }

}


module.exports = new UserController();





