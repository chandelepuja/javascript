let arrayy = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array using for in loop..`);
for (const index in arrayy) {
  console.log(arrayy[index]);
}

console.log(`========================`);
let array = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array using for in loop..`);
let sum = 0;
for (const index in array) {
  console.log(array[index]);
  sum = sum + array[index];
}
console.log(`Sum of array element is : ${sum}`);

console.log(`=====log only even number using for in loop====`);
for (const index in array) {
  if (array[index] % 2 == 0) {
    console.log(array[index]);
  }
}

console.log(`=========================================`);
let arrayNum = [4, 5, 6, 7, 3]

console.log(`Traversing an array using for of loop..`);

for (const element of arrayNum) {

   console.log(element); 

}
  let arrayNumm = [4, 5, 6, 7, 3];
  console.log(`Traversing an array using for of loop..`);
  let result = 0;
  for (const element of arrayNumm) {
    console.log(element);
    result = result + element;
  }
  console.log(`Sum of element present in array is = ${result}`);
  console.log(`=================================================`);

  console.log(`==== WAP to count the vowels from the given string=======`);
  const str = "Developer UI and Backend";
  const vowels = "aeiou";
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  console.log(`Vowels count is: ${count}`);

  console.log(`*********join method**********`);

  let arrayOfFriends = ["Jenny", "Elon", "Bill"];
  const resultt = arrayOfFriends.join(",");
  console.log(`Type of resultt is ==>`,typeof resultt);
  console.log(`After join method we get = ${resultt}`);
  console.log(``);

  console.log(`=========Reverse method========`);

  arrayOfFriends.reverse();
  console.log(arrayOfFriends);
  console.log(``);

  console.log(``);
  const word = "Developer UI and Backend";
  const arrayOfWords = word.split(" ");
  console.log(`1) After using split method is = `,arrayOfWords);

  console.log(`2) Total number of words are = `,arrayOfWords.length);
  console.log(``);
  const words = word.split("");
  console.log(`===========After split Array is=======`);
  console.log(words);
  console.log(`==============Reverse Array=============`);
  words.reverse();
  console.log(words);
  console.log(`============reverse string=======`);

  const reverseStr = word.split("").reverse().join("");
  console.log(reverseStr);
