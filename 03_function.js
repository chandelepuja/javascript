


console.log("****************************STEP 1****************************");
function square(num){
   console.log("Given value is:", num);
   var result = num * num;
   console.log("Result is:", result);
}
square(9);//funftion call or Invokation
square(11);
square(25);
square(1023);

console.log("****************************STEP 2****************************");

function multiply(n1,n2,n3){
    console.log("Given number are:", n1,n2,n3);
    var result = n1 * n2 * n3;
    return result;
}
var returnValue = multiply(5, 5, 5);
console.log("Multipication is: ",returnValue);

var returnValue = multiply(34, 56, 89);
console.log("Multipication is: ",returnValue);

console.log("****************************STEP 3****************************");

function swap(n1,n2) {
    console.log("Before Swap:","n1=",n1, "n2=",n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log("After Swap:","n1=",n1, "n2=",n2);
    
}
swap(100,200);
swap("Jenny","Menny");