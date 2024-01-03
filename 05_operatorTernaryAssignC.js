console.log(`Use Normal Function and ternary operator`);
console.log(`**************************STEP 1************************`);
function maleMarriageEligibilty(gender, age, boyName) {
    var result = gender=="Male" && age >=21 
    ? `Hey ${boyName} you are eligible for Marriage.`
    : `Sorry... ${boyName} you are not eligible for Marriage, Please try next time. `
    console.log(`Gender = ${gender}, Age = ${age}, Name = ${boyName}`);
    console.log(result);
}
maleMarriageEligibilty("Male", 25, "Billgates");
maleMarriageEligibilty("Male", 17, "Stew Jobs");


console.log(`**************************STEP 2************************`);
function femaleMarriageEligibilty(gender, age, girlName) {
    var result = gender=="Female" && age>=18
    ? `Hey ${girlName} you are eligible for Marriage.`
    : `Sorry... ${girlName} you are not eligible for Marriage, Please try next time. `
    console.log(`Gender = ${gender}, Age = ${age}, Name = ${girlName}`);
    console.log(result);
    console.log(`                                                                         `);
}
femaleMarriageEligibilty("Female", 16, "Jenifer");
femaleMarriageEligibilty("Female", 27, "Malinda Gates");
    
