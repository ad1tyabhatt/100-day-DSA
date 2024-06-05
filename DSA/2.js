//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows.

//? the input string should be converted to a hash tag format, where each word is capitalised and concatenated together without spaces.

//? If the length of the input string is greater than 200 characters or if the input string is empty or contains only whitespaces , the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.


function generateHash (str){
    if(str.length===0 || str.length>=200) return false;
    let len=0;
    str=str.split(" ")
    str = str.map((curr)=> curr.replace(curr[0],curr[0].toUpperCase()))
    // for(let s of str){
    // }
    return '#'+str.join("")
}


console.log(generateHash('my name is aditya'))
