console.log(`==========STEP 1=============`);

class Vehical {
    vehicalName;
    vehicalType;
    presentIn;
    vehicalcolour;
    vehicalOwner;
    constructor(vehicalName, vehicalType, presentIn, vehicalcolour, vehicalOwner){

        this.vehicalName = vehicalName;
        this.vehicalType = vehicalType;
        this.presentIn = presentIn;
        this.vehicalcolour = vehicalcolour;
        this.vehicalOwner = vehicalOwner;
    }
    getDetails(){
        console.log(`Vehical Name=> ${this.vehicalName}, Vehical Type=> ${this.vehicalType}, Present In=> ${this.presentIn}, Vehical Colour=> ${this.vehicalcolour}, Vehical Owner=> ${this.vehicalOwner},`);
    console.log(``);
    }
}
const vehicalNo1 = new Vehical("Tesla", "Luxury Electric Vehical", 2003, "Red", "Shiv");
const vehicalNo2 = new Vehical("BMW", "Luxury Vehical", 1916, "Blue", "Falguni");
const vehicalNo3 = new Vehical("Ferrari", "Luxury Sports Cars", 1947, "Yellow", "Sharddha");
const vehicalNo4 = new Vehical("Honda", "Mass Market Cars", 1948, "Gray", "Darshan");
const vehicalNo5 = new Vehical("Lamborghini", "Luxury Sports Cars", 1963, "Balck", "Pooja");

console.log(`Traversing array of Object...`);
const arrayOfVehicals = [vehicalNo1, vehicalNo2, vehicalNo3, vehicalNo4, vehicalNo5];
for (const element of arrayOfVehicals) {
element.getDetails()  ;  
    
}

console.log(`==========STEP 2=============`);
class College {
    collegeName;
    estabilshIn;
    locatedAt;
    collegeOf;
    constructor(collegeName, estabilshIn, locatedAt, collegeOf){
        this.collegeName = collegeName;
        this.estabilshIn = estabilshIn;
        this.locatedAt = locatedAt;
        this.collegeOf = collegeOf;

    }
    getDisplay(){
        console.log(`College Name=> ${this.collegeName}, Estabilsh In=> ${this.estabilshIn}, Located At=> ${this.locatedAt}, College Of=> ${this.collegeOf}`);
    }
    
}
const college1 = new College("Fergusson",  1885, "Pune", "Arts");
const college2 = new College("K.T.H.M. College",  1969, "Nashik", "Science");
const college3 = new College("Jai Hind College",  1948, "Mumbai", "Commerce");
const college4 = new College("Shivaji Science College, pauni",  1967, "Nagpur", "Science");
college1.getDisplay();
console.log(``);
college2.getDisplay();
console.log(``);
college3.getDisplay();
console.log(``);
college4.getDisplay();

console.log(`===========STEP 3=======`);
function traverseObject(arg1){
    for (const key in arg1) {
        if (Object.hasOwnProperty.call(arg1, key)) {
            const element = arg1[key];
            console.log(`Key ==> ${key}, Value ==> ${element}`);
        }
    }
}
traverseObject(college1);
console.log(``);
traverseObject(college2);
console.log(``);
traverseObject(college3);
console.log(``);
traverseObject(college4);

