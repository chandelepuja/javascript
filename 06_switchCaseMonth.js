console.log(`*****Create normal function with one arg and use Switch Case and pass month in switch*****`);
function monthOfYear(month){
    switch (month) {
        case 1:
            console.log(`Month = ${month} ==> "January"`);
            break;
            case 2:
            console.log(`Month = ${month} ==> "February"`);
            break;
            case 3:
            console.log(`Month = ${month} ==> "March"`);
            break;
            case 4:
            console.log(`Month = ${month} ==> "April"`);
            break;
            case 5:
            console.log(`Month = ${month} ==> "May"`);
            break;
            case 6:
            console.log(`Month = ${month} ==> "June"`);
            break;
            case 7:
            console.log(`Month = ${month} ==> "July"`);
            break;
            case 8:
            console.log(`Month = ${month} ==> "August"`);
            break;
            case 9:
            console.log(`Month = ${month} ==> "September"`);
            break;
            case 10:
            console.log(`Month = ${month} ==> "October"`);
            case 11:
            console.log(`Month = ${month} ==> "November"`);
            break;
            case 12:
            console.log(`Month = ${month} ==> "December"`);
            break;
            
    
        default:
            console.log(`Invalid Input ==> Month = ${month}`);
            break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);