



function UserResource(doc,ret){
    delete ret._id;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
    delete ret.password;
    return ret;
}



module.exports = {
    UserResource
}