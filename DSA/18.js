
//? Check if character is uppercase or lowercase


function upperOrLower(str){
    if(str.toUpperCase()===str) return "UpperCase"
    else return "LowerCase"
}

//! Alternate

const isUpperOrLower = (char) =>{
    if(char.charCodeAt(0)>= 65 && char.charCodeAt(0)<=90) return true
    else return false
}

console.log(upperOrLower('S'))