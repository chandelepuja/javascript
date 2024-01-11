console.log(`STEP 1===Create the object 'bankSbi' using literals with 4 properties===`);
let bankSbi = {
bankName: "SBI",
accountNumber: 34175362312,
branch:"Pune",
manegerName:"Darshan Chandele",
}
console.table(bankSbi);

console.log(`STEP 2===Create the object 'bankLocation' using literals======`);
let bankLocation = {
    street: "Keshaw Nagar",
    city: "Pune",
    pin: 411004,
}
console.table(bankLocation);
console.log(`STEP 3===Clone STEP 1 and STEP 2 using 'object.assign()' method===`);
console.log(`***  Clone bankSbi ***`);
let clone1 = Object.assign({},bankSbi)
console.log(`After clone in new object we change the bank name :`);
clone1.bankName = "HDFC";
console.table(clone1);
console.log(`***  Clone bankLocation ***`);
let clone2 = Object.assign({},bankLocation)
clone2.pin = 400114;
console.log(`After clone in new object we change the pin :`);
console.table(clone2);

console.log(`STEP 4===Create the object 'rateOfInterest' using literals======`);
let rateOfInterest = {
    homeLoanInterest: 7.2,
    personalLoanInterest:5.2,
    dueInterest: 3
}
console.table(rateOfInterest);
console.log(`STEP 5===Merge STEP 1, STEP 2, and STEP 4 objects into new object 'sbiDetails'===`);
let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.table(sbiDetails);

console.log(`STEP 6===Traverse this merged object STEP 5 using for in loop======`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

