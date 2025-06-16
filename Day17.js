// convert string in to camel case and snake case 

const toCamelCase = (str) =>{
    return str
    .trim()
    .split(" ")
    .map((currElem,index) =>{
        if(index === 0){
            return currElem.toLowerCase();
        } else {
            return currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase();
        }
    })

    .join("");
    //.join("_"); for snake case 
} 

console.log(toCamelCase("my name is abdul basit"))

