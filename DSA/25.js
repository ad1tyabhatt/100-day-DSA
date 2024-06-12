//# Factorial Recursion 



function facRec(n){
    if(n<=1) return 1;
    else return facRec(n-1)*n
}

console.log(facRec(5))