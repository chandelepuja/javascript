


let factorial = function(num){
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0) {
        return `Invaild input that is negative number : ${num}`;
    }
    if (num==null || num==undefined) {
        return 'Invalid';
    }
    // if (num==undefined) {
    //     return 'Invalid';
    // }

    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result * index;
        }
        return result;
        
}
let ressult = factorial(3);
console.log(ressult);
let ressult1 = factorial(5);
console.log(ressult1);
console.log(`Factorial of undefined => ${factorial(undefined)}`);
console.log(`Factorial of 6 => ${factorial(6)}`);
console.log(`Factorial of 9 => ${factorial(9)}`);
console.log(`Factorial of 0 => ${factorial(0)}`);
console.log(`Factorial of -5 => ${factorial(-5)}`);
console.log(`Factorial of null => ${factorial(null)}`);
console.log(`Factorial of undefined => ${factorial(undefined)}`);
