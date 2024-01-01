

console.log(`**************************STEP 1**********************`);
function squareOfWordLength(word) {
console.log(`Given string is : ${word}`);

var len = word.length;
var result = len * len;
console.log(`Length of string is : ${len} and square of length is ${result}`);
console.log(`------------------------------------------------------`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`**************************STEP 2**********************`);
function length() {
    var str = "I am Angular Developer";
    console.log(`Given string is : ${str}`);
    var len = str.length;
    var result = str.split(" ");
    var totalWords = result.length;
    var multi = len * totalWords;
    console.log(`The length of string is : ${len}`);
    console.log(`Total words in string is ${totalWords}`);
    console.log(`                                              `);

    var division = len / totalWords;
    console.log(`After division we get = ${division}`);
    console.log(`After multipication we get = ${multi}`);

 }
length();