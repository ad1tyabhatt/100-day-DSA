//* Cal Median


function getMedian(arr){
    let len = arr.length;
    arr = arr.sort((a,b)=> a-b)
    if(len%2!=0) return arr[((len+1)/2) - 1]
    else return (arr[(len/2)-1] + arr[(len/2)])/2

}


console.log(getMedian([3,3,4,9,15,20]))