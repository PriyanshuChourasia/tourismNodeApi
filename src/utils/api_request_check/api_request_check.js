


async function isRequestEmpty(req){
    const status = Object.keys(req.body).length;
    if(status == 0){
        return false;
    }
    return true;
}




module.exports={
    isRequestEmpty
}