
const { getConcatSubString } = require("./string_functions");

/**
 * 
 * Generates a unique string on the basis of input
 * 
 * @param {String | Number} string1 
 * @param {String | Number} string2 
 * @returns {Promise<String>}
 */




async function uniqueUsernameString(string1,string2) {
    const str1 = string1.toString();
    const str2 = string2.toString();
    const str3 = new Date().getTime().toString();
    const string3 = str3.slice(0,str3.length / 2);
    try {
        const username = await getConcatSubString(str1,str2,string3);
        return username;
    } catch (error) {
        throw new Error('Error in creating username');
    }
}


module.exports={
    uniqueUsernameString
}
