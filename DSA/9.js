
//* Calculate the average

//# Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.


function getAvg(arr){
    let n = arr.length;
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/n
}


//! alternative
const num = [1,2,3,4,5];
const res = num.reduce((acc,curr)=>acc+curr,0)


console.log(res/num.length)
console.log(getAvg([1,2,3,4,5]))