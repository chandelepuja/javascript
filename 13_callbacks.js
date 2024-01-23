function jenny(arg){ // arg = 100
    console.log(`After session.. Jenny started homework`);
    console.log(`Jenny completed all steps`);
    console.log(`Then she is ready to call back Bill `);
    arg();
 }
 
 let bill = function(){
     console.log(`I am Bill and I am going to play Cricket `);
     console.log(`I know Jenny likes me, Hence once She completes her homework`);
     console.log(`She will definitely call me back..`);
     console.log(`Then I will copy all the assignments as it is..`);
 }
 jenny(bill)

