console.log(`***************************STEP 1***************************`);
function stringBasics(){
    var companyName = "Google";
    console.log(`My dream company is ${companyName}`);
    console.log(`***************************STEP 2***************************`);
    var hobby1 = "Cooking";
    var hobby2 = "Singing";
    var hobby3 = "Reading"
    console.log(`My hobbies are ${hobby1},${hobby2},${hobby3}`);
    var addHobby = hobby1 + hobby2 + hobby3;
    var result = addHobby.length;
    console.log(`The total number of character in all hobby is ${result}`);
}
stringBasics();