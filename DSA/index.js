


// Write a function find the longest word that takes a string as input and retyrns the longest word in the string. If there are multiple longest words, return the first one encountered.

// the inpuut string may container alphabetic characters, digits, space and punctuation



//! mY apprroach

function longestWord(str){
    const arr = str.split(' ')
    let maxLen=0;
    let res;
    for(let a of arr){
        if(a.length>maxLen) maxLen=a.length;
        else{
            continue
        }
        res =a
    }
    return res
}

words.reduce((acc,curr)=> {curr.length>acc.length?curr:acc})



// 

console.log(longestWord('My name is Aditya kjasndkajdbiqd'))

