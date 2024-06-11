//# Write a JS function to count the occurences of each element in an array and store the count in an object. The keys of the object should represent the elements of the array, and the calues should represent the number of times each element appears in the array


const numbers = [1,2,2,3,1,4,2]
let count = {}

for(let element of numbers){
    count[element] = (count[element] || 0) + 1;
}

console.log(count)
