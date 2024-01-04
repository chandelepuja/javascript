console.log(`****STEP 1 = WAP using Function Expression and ifElse to check number is even or odd*****`);


var isEvenOrOdd = function (num) {
  if (num % 2 == 0) {
    console.log(`Given number is: ${num}`);
    console.log(`Number is Even`);
    console.log(`                              `);
  } else {
    console.log(`Given number is: ${num}`);
    console.log(`Number is Odd`);
    console.log(`                             `);
  }
};
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log(`*****STEP 2 = Check if person is eligible for vote or not*****`);
var isEligible = function (age) {
    if (age>=18) {
        console.log(`Person age is: ${age}`);
        console.log(`Person is eligible for Vote`);
        console.log(`                                     `);
    } else {
        console.log(`Person age is: ${age}`);
        console.log(`Person is not eligible for Vote`);
        console.log(`                                     `);
    }
    
}
isEligible(18);
isEligible(20);
isEligible(17);
isEligible(40);

console.log(`*****STEP 3 = Check if string contains more than 10 character or not*****`);
var isCheck = function(word){
    if (word.length>10) {
        console.log(`Given String is: ${word} and it contains ${word.length} character in it`);
        console.log(`String contains more than 10 charater`);
    } else {
        console.log(`Given String is: ${word}, and it contains ${word.length} character in it.`);
        console.log(`String dose not contains more than 10 charater`);
    }
}
isCheck("Javascript-ES6")

console.log(`                                                                       `);
console.log(`*****STEP 4 = Check if string strats with "Java" or not*****`);
var isStart = function(word){
    if (word.startsWith("Java")) {
        console.log(`Given string is: ${word}`);
        console.log(`The sting start with word "Java"`);
        
    } else {
        console.log(`Given string is: ${word}`);
        console.log(`The sting does not start with word "Java"`);
    }

}
isStart("JavaScript Language")