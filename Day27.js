//  FUNCION THAT REPEAT STRINGS THAT TAKES TWO PARAMETERS

const repeatString =(str,num)=>{
    return num > 0 ? str.repeat(num) : str;
};


console.log(repeatString("abc",3));
