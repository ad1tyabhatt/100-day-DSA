//? Write a function to calculate the sum of square of all elements in an array. 

function sumOfSquares(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=Math.pow(arr[i],2)
    }
    return sum
}


//! alter

const sum = (arr) =>{
    return arr.reduce((acc,curr)=> acc = acc+ (curr*curr))
}

console.log(sum([1,4,5]))

console.log(sumOfSquares([1,2,3]))