console.log(`===STEP 1 : with no args and no return value===`);
const day = () => {
    console.log(`Good Morning, Today is Thursday`);
    console.log(``);
}
day();

console.log(`===STEP 2 : with 3 args and no return value===`);

const multiply =  (arg1, arg2, arg3=1) => {
  console.log(`values are : 1)${arg1}  2)${arg2}  3)${arg3}`);
    let result =arg1 * arg2 * arg3;
  console.log(`Multiplication is : ${result}`);
  console.log(``);
}
multiply(5, 5, 2);
multiply(10,4);

console.log(`===STEP 3 : with 5 args and return value===`);

const addition = (arg1, arg2, arg3, arg4, arg5) => {
    console.log(`values are: 1)${arg1}  2)${arg2}  3)${arg3}  4)${arg4} 5)${arg5}`);
    return arg1 + arg2 + arg3 + arg4 + arg5;
}
const valueResult = addition(100, 100, 200, 349, 756);
console.log(`Addition of given number is = ${valueResult}`);
console.log(``);
const stringResult = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`Addition of given string is = ${stringResult}`);