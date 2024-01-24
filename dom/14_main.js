console.log(`===STEP 1 : Change color of element===`);

const changeColor = document.querySelector("h1")
changeColor.style.color = "blue";

const changeColorAgain = document.querySelector("h2")
changeColorAgain.style.color = "cadetblue";


console.log(`===STEP 2 : Change Atrribute use "setAttribute"===`);
const profile = document.querySelector("a");
profile.setAttribute("href", "https://www.w3schools.com/");
