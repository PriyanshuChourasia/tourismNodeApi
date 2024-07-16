




class ApiResponse{


    constructor(){}


    SuccessResponse(response,response_Status,response_Data){
        return response.status(response_Status.code).json({
            data:response_Data,
            status:response_Status.code,
        })
    }

    ErrorResponse(response,response_Status,response_msg){
        return response.status(response_Status.code).json({
            error:response_msg,
            status:response_Status.code,
        })
    }

    /** -----------------------------Previous Code----------- */

    // ApiResourceResponse(response,response_status,response_data){
    //     return response.status(response_status).json({
    //         data: response_data,
    //         status: response_status
    //     });
    // }




    // ApiResourceErrorResponse(response,response_status,response_error){

    //     let errorResponse = [];

    //     for(const err of response_error.details){
    //         errorResponse.push(err.message);
    //     }

    //     return response.status(response_status).json({
    //         data:errorResponse,
    //         status:response_status
    //     })
    // }


    /*** ----------------------Previous Code end-------------- */


    ApiResourceErrorResponse(response,response_status,response_error){

        const errorResponse =  response_error.message.split('.')
                                    .map(subStr => subStr.split(' ')
                                    .filter(error => error !== 'ValidationError:')
                                    .join(' '))
                                    .filter(Boolean);

        return response.status(response_status).json({
            data:errorResponse,
            status:response_status
        })
    }

}




module.exports = new ApiResponse();