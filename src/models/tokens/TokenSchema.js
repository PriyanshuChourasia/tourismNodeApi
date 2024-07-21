const { required } = require('joi');
const {Mongoose} = require('../../config/database');
// const { dateToTimestamp } = require('./TokenSchemaFunctions');

const {Schema} = Mongoose;

const TokenSchema = new Schema({
    tokenable_type:{
        type:String,
        default:"jsonWebToken"
    },
    name:{
        type: Schema.Types.ObjectId,
        ref:'Users',
        required:[true,'User Id is required']
    },
    token:{
        type:String,
        required:[true,'Token is required for verification']
    },
    last_used_at:{
        type:Date,
        default: new Date(),
        // set: dateToTimestamp
    },
    expires_at:{
        type:String,
    }
},{
    timestamps:true,
    minimize:true,
    optimisticConcurrency:true
});


const Token = Mongoose.model('Tokens',TokenSchema);


module.exports={
    Token
}