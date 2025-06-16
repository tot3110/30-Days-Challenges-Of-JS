// find Longest word that takes a string as an input and returns the longest word in the string

const findLongestword = (str)=>{
    if (str.trim().length ===0){
        return false;
    }

    words = str.split(" ");
    //console.log(strArr);

    // words= words.sort((a,b) => b.length - a.length);
    // return words[0];

    return words.reduce((accum, currWord) => (currWord.length > accum.length ? currWord : accum),"");
};

console.log(findLongestword("Hello World Welcome to the New JS Videos"));
