



//here we select input feild one by one by querySelector...(class)

const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");


//here we select result by querySelector...(id)

const result = document.querySelector("#resultValue");

//here we write code as we click on ADDITION button...

const addition = document.querySelector("#add");//here we select ADDITION BUTTON by querySelector...(id)

addition.addEventListener('click',() =>{
    const v1 = +value1.value;
    const v2 = +value2.value;
    const result =v1 + v2;
    console.log(result);
    resultValue.innerHTML = result
//    console.log(value1.value+value2.value);
});

//here we write code as we click on SUBSTRACTION button...

const substraction = document.querySelector("#sub"); //here we select SUBSTRACTION BUTTON by querySelector...(id)

substraction.addEventListener('click',() =>{
    const v1 = +value1.value;
    const v2 = +value2.value;
    const result =v1 - v2;
    console.log(result);
    resultValue.innerHTML = result
//    console.log(value1.value-value2.value);
});

//here we write code as we click on MULTIPICATION button...

const multipilcation = document.querySelector("#multi");//here we select MULTIPICATION BUTTON by querySelector...(id)


multipilcation.addEventListener('click',() =>{
    const v1 = +value1.value;
    const v2 = +value2.value;
    const result =v1 * v2;
    console.log(result);
    resultValue.innerHTML = result
//    console.log(value1.value*value2.value);
});

//here we write code as we click on DIVISION button...

const division = document.querySelector("#divide");//here we select DIVISION BUTTON by querySelector...(id)

division.addEventListener('click',() =>{
    const v1 = +value1.value;
    const v2 = +value2.value;
    const result =v1 / v2;
    console.log(result);
    resultValue.innerHTML = result
//    console.log(value1.value/value2.value);
});

//here we write code as we click on CLEAR button...

 const clearButton = document.querySelector(".clear");//here we select CLEAR BUTTON by querySelector...(id)
 
 clearButton.addEventListener('click', ()=>{
    resultValue.innerHTML = " "
    value1.value = " ";
    value2.value = " ";
 });
