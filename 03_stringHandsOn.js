function stringHandsOn(){
    
    console.log(`*****************************STEP 1***************************`);
    var string = "    Hey you are doing good, keep it up    ";
    console.log(`The given string is = ${string}`);

    console.log(`*****************************STEP 2***************************`);
    var lengthOfString = string.length;
    console.log(`The length of string is = ${lengthOfString}`);
    
    console.log(`*****************************STEP 3***************************`);
    var afterTrim = string.trim();
    console.log(`After trim the string is = ${afterTrim}`);
    console.log(`After trim the lenght of string is = ${afterTrim.length}`); 
    
    console.log(`*****************************STEP 4***************************`);
    var removedSpaceCount = lengthOfString - afterTrim.length;
    console.log(`Total removed space count is = ${removedSpaceCount}`);
    
    console.log(`*****************************STEP 5***************************`);
    var charAtIndex = afterTrim.charAt(0);
    console.log(`The first character is = ${charAtIndex}`);
    var charAtIndex = afterTrim.charAt(afterTrim.length-1);
    console.log(`The last character is = ${charAtIndex}`);
    
    console.log(`*****************************STEP 6***************************`);
    var totalWord = afterTrim.split(" ");
    console.log(totalWord);
    console.log(`Total words in string are = ${totalWord.length}`);

    
    console.log(`*****************************STEP 7***************************`);
    var indexOfGood = afterTrim.indexOf("good");
    console.log(`The index of "good" is = ${indexOfGood}`);
    
    console.log(`*****************************STEP 8***************************`);
    var subString = afterTrim.substring(22, 34);
    console.log(`The substring after substring method is = ${subString}`);
    var subString = afterTrim.slice(22, 34);
    console.log(`The substring after slice method is = ${subString} `);
    
    console.log(`*****************************STEP 9***************************`);
    var end = afterTrim.endsWith("up");
    console.log(`Is string end with word "up" = ${end}`);
    
    console.log(`*****************************STEP 10***************************`);
    var start = afterTrim.startsWith("Hey");
    console.log(`Is string start with word "Hey" ${start}`);
}
stringHandsOn();