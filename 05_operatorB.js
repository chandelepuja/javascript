console.log(`Only use Ternary Operator`);
console.log(`                                                                                                        `);
console.log(`*****Find The greatest number amongst two number with function with two argument and no return*****`);

function greaterNumber(num1, num2){
    console.log(`Value of a = ${num1}`);
    console.log(`Value of b = ${num2}`);

    var result = num1>num2 ? "a is greatest number" : "b is greatest number";
    console.log(`The greatest number is : ${result}`);

}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(`                                                                                                  `);
console.log(`*****Find Even or Odd number with function with one argument and return true or false*****`);
function isEvenOrOddNum(num){
    console.log(`Given number is : ${num}`);

    var result = num % 2 == 0 ? "True , given number is Even" : "False , given number is Odd"
    console.log(result);
    console.log(`                          `);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`*****Check which word has even or odd length with function with one argument and return possinle value*****`);

function wordLength(word){
    console.log(`Given word is : ${word}`);
    var len = word.length;
    var result = len % 2 == 0 ? "Word length is Even" : "Word length is Odd";
    console.log(`Word length is : ${len}`);
    console.log(result);
    console.log(`                       `);

}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");