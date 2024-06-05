//! Write a function called checkTriangleType that takes three parameter representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle : "equilateral", "isosceles" or "scalene"


function checkTriangleType(a,b,c){
    if(!a|| !b || !c) return "Not a triangle" 
    if(a==b && b==c && c==a) return "equilateral" 
    if(a!=b && b!==c && c!=a) return "scalene"
    else return "Isosceles"
}

console.log(checkTriangleType(4,2,5))