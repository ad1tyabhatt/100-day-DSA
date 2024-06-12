//# truncate a string

function truncateString(str,n){
    if(str.length>n)  return str = str.slice(0,n)

    else if(n>str.length){
        let joiningDots =""
        for(let i=str.length;i<n;i++){
            joiningDots+="."
        }

        return str = str.slice(0,n) + joiningDots
    } 
    else return "cannot do it"
}

/**
 * !Alter
 * 
 * 
 */

console.log(truncateString("aoi- - 1  ",12))