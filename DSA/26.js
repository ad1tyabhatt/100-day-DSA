//* Write a function to find the nth Fibonacci number

function fibRec(n){
    if(n<=1) return n;
    else return fibRec(n-1)+ fibRec(n-2)
}
console.log(fibRec(9))
