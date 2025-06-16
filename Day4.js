// Function to check the trianlge type either it is equilateral, isoscles or scalene 

const checkTriangleType = (a,b,c,)=>{
    if(a ===b && b ===c) return "Equilateral";
    if(a ===b || b === c || a === c) return "Isoscles";
    return "Scalene";

}


console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,3,2));
console.log(checkTriangleType(2,3,4,));
