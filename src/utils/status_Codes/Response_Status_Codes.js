

const APIResponseCode = {
    Success: 200,
    Created: 201,
    Accepted: 202,
    No_Content:204,
    Already_Reported:208,
    Bad_Request: 400,
    UnAuthorized: 401,
    ForBidden_Content: 403,
    Requested_Resource_Not_Found: 404,
    Requested_Method_Not_Allowed: 405,
    Request_Timeout: 408,
    Version_Conflict: 409,
    Unsupported_Request_Format: 415,
    Request_Header_Exception_Failed: 417,
    Internal_Server_Error: 500
}




module.exports ={
    APIResponseCode
}