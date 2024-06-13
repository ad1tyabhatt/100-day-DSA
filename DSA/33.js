//# Write a function isEmptyObject that takes an ooject as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

const isEmptyObject = (obj)=>{
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            return "Its not empty"
        }
    }
    return "its empty"
}
console.log(isEmptyObject({name:"Aditya"}))