

console.log("========STEP 1===========");
let professor = {
    firstName: "Laxmikant Mule",
    age: 57,
    profession: "Teaching",
    address: "pune",
    isMarried: true,
degree: {
    engineering: "CSC",
    PHD: "Adv Computing",
    subExperties: "DSA",
    certificates: ["Hacker Rank Participation", "Certificates in IFE course", "Certificates on Adv Programming"]
    }
    
}


console.log(professor);
console.log(`==============STEP 2==============`);
console.log(JSON.stringify(professor.degree));
console.log(`=====STEP 3====`);
professor.totalExperience = "14 years";
console.log(professor.degree);

console.log(`=======STEP 4========`);
console.log(professor);
professor.age = 50;
console.log(`========STEP 5========`);
console.log(professor);
console.log(`==========STEP 6========`);
professor.degree.certificates.splice(2, 0, "Oracle Certified");
console.log(professor);
console.log(`=======STEP 7========`);
let res = professor.degree.certificates[3];
console.log(res);
console.log(`=======STEP 8========`);
for (const key in professor) {
    if (Object.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
        
    }
}
console.log(professor);
console.log(`=========STEP 9====`);
for (const element of professor.degree.certificates) {
    console.log(element);
}