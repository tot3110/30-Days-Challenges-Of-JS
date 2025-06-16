// Generate Hash Tag

const generateHash = (str) => {
    if (str.length > 280 || str.trim().length ===0){
        return false;
    }
    str = str.split(" ");
    str.map((element)=>{
    let elementArr = element.split("");
    console.log(elementArr[0].toUpperCase())
    // elementArr = elementArr[0].toUpperCase();
    const camelcase = elementArr.join(" ");
    return camelcase;
    });
};


console.log(generateHash("my name is abdul basit i am a web developer"));


