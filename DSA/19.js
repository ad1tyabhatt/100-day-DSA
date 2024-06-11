//# Write a function to chack if a given string starts with a specific substring.

function startsWith (string,check){
    string = string.split(" ")
    if(string[0].toLowerCase()==check.toLowerCase()) return true
    return false
}

//!alter
// return string.slice(0,check.length)===check

console.log(startsWith("HeLLo world","hello"))