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

// console.log(`==================Sum of odd number=========`);
// let array1 = [11, 22, 33, 44, 55, 66, 77];
// console.log(`Traversing an array using for in loop..`);
// let sum1 = 0;
// for (const index in array1) {
//     if (array1[index]%=1) {
//         sum1 = sum1 + array1[index];

        
//     }
// }

//    console.log(array1[index]);
//    sum1 = sum1 + array1[index];

// console.log(`Sum of array element is : ${sum1}`);

console.log(`=========================================`);
console.log(`Traversing an array using for of loop..`);
for (const element of array) {
   console.log(element); 

console.log(`************************`);

let arrayNumm = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);
let result = 0;
for (const element of arrayNumm) {
    result = result + arrayNumm[element];
   console.log(element); 
}
console.log(result);


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
console.log(typeof resultt);
console.log(resultt);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords);
console.log(arrayOfWords.length);

const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);

}
