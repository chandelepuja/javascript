function factorialOfNum(num) {
  console.log(`Given Number is ${num}`);
  if (num == null || num == undefined) {
    return `Invalid`;
  }
  if (num == 1 || num == 0) {
    return 1;
  }
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result = result * index;
  }
  return result;
}
console.log(`Factorial of 5 => ${factorialOfNum(5)}`);
console.log(``);

console.log(`Factorial of 3 => ${factorialOfNum(3)}`);
console.log(``);

console.log(`Factorial of null => ${factorialOfNum(null)}`);
console.log(``);

console.log(`Factorial of 8 => ${factorialOfNum(8)}`);
console.log(``);

console.log(`Factorial of undefined => ${factorialOfNum(undefined)}`);
console.log(``);

console.log(`Factorial of 9 => ${factorialOfNum(9)}`);
console.log(``);

console.log(`Factorial of 0 => ${factorialOfNum(0)}`);
