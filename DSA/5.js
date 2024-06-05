//! Sort an array

//? Write a function to sort an array of numbers in ascending order


const arr = [52, 2, 7, 1, 0]

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arr.length - i - 1; j++){
            // swapping the elements
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arr
}

console.log("Before sorting: ", arr)
console.log("After sorting: ", bubbleSort(arr))