//# Reverse A String


function reverse(str){
    str = str.split("")
    let left = 0;
    let right = str.length-1
    while(left<right){
        [str[left],str[right]] = [str[right],str[left]]
        left++;
        right--;
    }
    return str.join("")
}


// alter

const reverseString = (str) =>{
    let rStr = "";
    for(let i=str.length-1;i>=0;i--){
        rStr = rStr+str[i]
    }
    return rStr
}

console.log(reverse("Hwllp"))