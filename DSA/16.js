//!Minima


function findMin(arr){
    let min = (1/0)
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min) min = arr[i]
    }
    return min
}

const getMin = (arr)=>{
    return arr.reduce((acc,curr)=> acc<curr)
}

console.log(findMin([5,1,12,-123,-19]))