
console.log("****************************STEP 1*****************************");

console.log("-------------------------Function 1 = No Arguments and No Return Type---------------------");
function add() {
    
    var n1=20;
    var n2=30;
    var result = n1 + n2;
    console.log("Two numbers are","n1=",n1,"n2=",n2);
    console.log("Addition of two number is:", result);
}
add();

console.log("-------------------------Function 2 = No Arguments and No Return Type---------------------");
function sub() {
    
    var n1=20;
    var n2=30;
    var result = n1 - n2;
    console.log("Two numbers are","n1=",n1,"n2=",n2);
    console.log("Subtraction of two number is:", result);
}
sub();

console.log("****************************STEP 2 (Function with arguments)*****************************");

function personalDetails(firstName, lastName, collegeName){
    console.log("My first name is", firstName);
    console.log("My last name is", lastName);
    console.log("My college name is", collegeName);

}
personalDetails("Pooja","Chandele","Jagdamba Mahavidyalaya");

console.log("****************************STEP 3 (Function with arguments and no return type)*****************************");

function swapValues(value1,value2){
    console.log("Before Swap Values Are :");
    console.log("Value 1 =", value1);
    console.log("Value 2 =", value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap Values Are :");
    console.log("Value 1 =", value1);
    console.log("Value 2 =", value2);
}
swapValues("Virat", "Anushka");
swapValues(1000,2000);

console.log("****************************STEP 4  (Function with 3 arguments and its addition)***********************");

function addThreeValues(arg1,arg2,arg3){
    var add = arg1 +arg2 + arg3;
    console.log("value 1=",arg1,"value 2=",arg2,"value 3=",arg3);
    console.log("Addition of three values is:",add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good", "Morning");


