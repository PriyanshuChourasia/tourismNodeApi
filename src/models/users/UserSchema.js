const {Mongoose}  = require('../../config/database');
const {UserResource} = require('../../helper/Resources/UserResponseResource/UserResponseResource');

const responseArray = ['_id','__v','createdAt','updatedAt'];


const {Schema} = Mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:[true,'Users email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Users Password is required']
    },
    age:{
        type: Number,
        min:0
    },
    gender:{
        type: String,
        enum:{
            values:['male','female','others','prefer not to say'],
            message:'{VALUE} is not in the database'
        }
    },
    phoneNumber:{
        type: String,
    }
},{
    timestamps:true,
    optimisticConcurrency:true,
    minimize:true,
    toJSON:{
        transform: UserResource
    },

});



const User = Mongoose.model('Users',UserSchema);


module.exports={
    User
}

