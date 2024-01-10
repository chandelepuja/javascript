const fruits_seasonal = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`=====log the first and last element on console=====`);
console.log(`Given array is :`,fruits_seasonal);
console.log(``);



let firstElement = fruits_seasonal[0];
console.log(`The first element of array given array is : ${firstElement}`);
let lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`The last element of array given array is : ${lastElement}`);
console.log(``);



console.log(`===Add element-->"Papaya" befor the element "Banana"===`);
const fruits_array = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, fruits_array);

fruits_array.unshift("Papaya");
console.log(fruits_array);
console.log(``);



console.log(`===Remove "Mango" from the array===`);
const fruits = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, fruits);

let removeMango = fruits.splice(3,1);
console.log(`Removed Element ==> ${removeMango}`);
console.log(fruits);
console.log(``);




console.log(`===Insert an element "Pineapple" at the last position===`);
const seasonal_fruits = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, seasonal_fruits);

seasonal_fruits.push("Pineapple")
console.log(seasonal_fruits);
console.log(``);



console.log(`===Insert an element -->"Dragon Fruit" before "Water Melon"`);
const allFruits = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, allFruits);

allFruits.splice(4, 0, "Dragon Fruit")
console.log(allFruits);
console.log(``);



console.log(`====Replace "Orange" with "Kiwi"====`);
const allFruit = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, allFruit);

allFruit.splice(1, 1, "Kiwi");
console.log(allFruit);
console.log(``);



console.log(`===log the element starting from index 1 to 4===`);
const fruitss = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, fruitss);

let result = fruitss.slice(1, 4);
console.log(result);
console.log(``);




console.log(`===only select last three element and log on console. Use the length property===`);
const fruitList = ["Banana", "Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is :`, fruitList);

let res = fruitList.slice(fruitList.length-3);
console.log(res);




