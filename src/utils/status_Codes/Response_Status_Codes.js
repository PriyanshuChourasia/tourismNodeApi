

const APIResponseCode = {
    Success: {
        code:200,
    },
    Created:{
        code:201,
    },
    Accepted:{
        code:202,
    },
    No_Content:{
        code:204,
    },
    Already_Reported:{
        code:208,
    },
    Bad_Request:{
        code:400,
    },
    UnAuthorized:{
        code:401,
    },
    ForBidden_Content:{
        code:403,
    },
    Requested_Resource_Not_Found:{
        code:404,
    },
    Requested_Method_Not_Allowed:{
        code:405,
    },
    Request_Timeout:{
        code:408,
    },
    Request_Conflict:{
        code:409,
    },
    Unsupported_Request_Format:{
        code:415,
    },
    Request_Header_Exception_Failed:{
        code:417,
    },
    Internal_Server_Error:{
        code:500,
    },
    Unprocessable_Content:{
        code:422,
    }
}




module.exports ={
    APIResponseCode
}