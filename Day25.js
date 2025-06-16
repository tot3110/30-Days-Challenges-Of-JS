// FACTORIAL OF A NUMBER USING RECURSION

const recursionNum = (num)=>{
    if(num === 1){
        return 1;
    }else {
        return num * recursionNum(num-1);
    }
};

console.log(recursionNum(5));


