
/**
 * 
 * @param {String | Number} last_used_at 
 * @returns {Promise<Number>}
 */

const { Mongoose } = require("../../config/database");


async function dateToTimestamp(last_used_at){
    if(!(this instanceof Mongoose.Document)){
        return last_used_at;
    }
    const updatedDate = new Date(last_used_at).getTime() / 1000;
    return updatedDate; 
}










module.exports={
    dateToTimestamp
}