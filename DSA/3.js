//! Write a funciton called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

function countChar(str,s){
    let count = 0;
    str = str.toUpperCase()
    str = str.split("")
    s = s.toUpperCase()
    for(let string of str){
        if(string == s ) count++
    }

    return count
}

console.log(countChar('Mississippi',"i"))


//? Other approach

function count(word,char){
    word = word.toUpperCase()
    char  = char.toUpperCase()

    totalCount = word.split("").reduce((acc,cur)=>{
        if(cur == char) acc++;
        return acc
    },0)

    return totalCount
}


console.log(count('Mississippi',"i"))




