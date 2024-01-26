console.log(`***Marriage Elgibilty Checker System decide on two input values gender and age***`);

var marriageEligibility = function (gender, age) {
  if (age < 0 || age == undefined || age == null || isNaN(age)) {
    console.log(`$(age) ==> Invalid Input`);
  } else if ((gender == "Male" && age >= 21)) {
    console.log(`Gender = ${gender} and Age = ${age}`);
    console.log(`Congratulation....You are eligible for marriage`);
    console.log(`                                                   `);
  } else if ((gender == "Female" && age >= 18)) {
    console.log(`Gender = ${gender} and Age = ${age}`);
    console.log(`Congratulation...You are eligible for marriage`);
    console.log(`                                                   `)
  } else {
    console.log(`Gender = ${gender} and Age = ${age}`);
    console.log(`Sorry...you are not eligible for marriage`);
    console.log(`                                                   `)
  }
  {
  }
  {
  }
};
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41)
