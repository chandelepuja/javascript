console.log(`========STEP 1=========`);
let bankSbi = {
bankName: "SBI",
accountNumber: 34175362312,
branch:"Pune",
manegerName:"Darshan Chandele",
}
console.table(bankSbi);

console.log(`========STEP 2=========`);
let bankLocation = {
    street: "Keshaw Nagar",
    city: "Pune",
    pin: 411004,
}
console.table(bankLocation);
console.log(`========STEP 3=========`);
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

console.log(`========STEP 4=========`);
let rateOfInterest = {
    homeLoanInterest: 7.2,
    personalLoanInterest:5.2,
    dueInterest: 3
}
console.table(rateOfInterest);
console.log(`========STEP 5=========`);
let mergeObj123 = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.table(mergeObj123);

console.log(`========STEP 6=========`);
for (const key in mergeObj123) {
    if (Object.hasOwnProperty.call(mergeObj123, key)) {
        const element = mergeObj123[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

