console.log(`***Using if else statement check TSC interview eligibility***`);
console.log(`__________________________________________________________________`);
function interview(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview.`);
        console.log(`                                                                  `);
    } else {
        console.log(`Sorry... ${candidateName} Unfortunately you are not eligible for interview. `);
    }
}
interview(80, 86, 90, "Pooja");
interview(70, 65, 55, "Darshan");
interview(60, 79, 88, "Anjali");