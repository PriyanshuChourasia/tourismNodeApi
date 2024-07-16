/**
 * 
 * Returns All the Uppercase alphabet
 * 
 * @returns {Promise<String>}
 */


async function getAlphabetString(){
    let str = '';
    let alpha = '';
    for(let a=65; a<90; a++){
        alpha = String.fromCharCode(a);
        str = str.concat('',alpha);
    }
    return str.toString();
}

/**
 * Creates Substrings
 * 
 * @param {String} sub_Str 
 * @returns {Promise<String>}  
 */

async function getSubString(sub_Str) {
    let max = Math.floor(Math.random() * sub_Str.length);
    if(max == 0){
        max = sub_Str.length / 2;
    }
    const input_str = sub_Str.toString().split(' ').join('').split('').slice(0, max).toString().replace(/,/g, "");
    return input_str;
}


/**
 * 
 * Concats the substrings
 * 
 * @param {String} string1 
 * @param {String} string2 
 * @param {String} string3 
 * @returns {Promise<String>}
 */



async function getConcatSubString(string1, string2, string3) {
    const str1 = await getSubString(string1);
    const str2 = await getSubString(string2);
    const str3 = await getSubString(string3);
    // const alphaString = await  getSubString(await getAlphabetString());
    const randomCode = Math.floor(Math.random() * 1000);
    const responseString = str1.concat('', str2).concat('', str3);
    return responseString;
}



module.exports={
    getConcatSubString,
}