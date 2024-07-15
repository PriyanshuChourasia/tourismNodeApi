




class ApiResponse{


    ApiResourceResponse(response,response_status,response_data){
        return response.status(response_status).json({
            data: response_data,
            status: response_status
        });
    }


    /** -----------------------------Previous Code----------- */
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