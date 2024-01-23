console.log(`=========SetTimeout 3 sec and 5 sec =========`);
let greet = function(){
    console.log(`After 5 sec it will print...`);
    console.log(`Hey.. Good Morning..`);
    
}
setTimeout(greet, 5000); // 1 Sec = 1000 Milli seconds


setTimeout( function(){
    console.log(`After 3 sec it will print...`);
    for (let index = 0; index < 5; index++) {
        console.log(index);
      
        
    }
  
} , 3000);

// let result = setInterval( function(){
//     console.log(`Hello.. `);
// }, 2000);
// clearInterval(result);
