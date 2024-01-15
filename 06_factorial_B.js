let factorialOfWordCount = function(word){
    
    if (word==null || word==undefined) {
        return 'Invalid';
    }
    console.log(`Given String is: ${word}`);
    let givenWords = word.split(" ").length;
    console.log(`Total number of word in string is: ${givenWords}`);
    


    let result = 1;
    for (let index = 1; index <=givenWords; index++) {
        result = result * index;
        }
        console.log(`Factorial of number ${givenWords} is ${result}`);
        console.log(``);
}

factorialOfWordCount("Revision is the mother of Success");
factorialOfWordCount("We never fail, we always learn, Mind it");
console.log(`Factorial of null => ${factorialOfWordCount(null)}`);
console.log(``);
factorialOfWordCount("");
factorialOfWordCount("Pooja Gopal Chandele");


