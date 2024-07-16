



async function dateToTimestamp(date){
    const updatedDate = new Date(date).getTime() / 1000;
    return updatedDate; 
}










module.exports={
    dateToTimestamp
}