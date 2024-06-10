// ! Convert String to camelCase and Snake Case


function toCamelCase(str){
 str = str.trim().split(" ")
 str = str.map((curr,i)=>{
    if(i===0) return curr.toLowerCase()
        else{
    return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase()
}
 })
 return str.join("")
}


function toSnakeCase(){

}


console.log(toCamelCase("My name is Aditya"))