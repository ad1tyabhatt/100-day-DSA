//# Write a function to chack if a given string starts with a specific substring.

function startsWith (string,check){
    string = string.split(" ")
    if(string[0].toLowerCase()==check.toLowerCase()) return true
    return false
}

//!alter
// return string.toLowerCase().slice(0,check.length)===check.toLowerCase()

console.log(startsWith("HeLLo world","hello"))