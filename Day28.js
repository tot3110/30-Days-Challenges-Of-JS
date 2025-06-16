// TRUNCATE STRING THAT TAKES TWO PARAMETERS 

const truncateString = (str,count) =>{
    return count <= 0 ? str : str.slice(0,count).concat("...")
};

console.log(truncateString("A tisket a tasket a green and yellow basket",15));
