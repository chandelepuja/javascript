console.log(`==========STEP 1==========`);
function bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.display = function(){
        console.log(`Bank Details is:`);
        console.log(`Bank Name=>${bankName}, Location=>${location}, ifscCode=>${ifscCode}, Branch Code=>${branchCode}`);
    }
}
const yesBank = new bank ("Yes Bank", "Pune","YESN0005943", 594300);
const sbiBank = new bank ("SBI Bank", "Mumbai","SBIN0005383", 432300);
const mahBank = new bank ("MAH Bank", "Nagpur","MAHN0005943", 794300);
const axisBank = new bank ("AXIS Bank", "Nashik","AXISN0005943", 781300)
yesBank.display();
console.log(``);
sbiBank.display();
console.log(``);
mahBank.display();
console.log(``);
axisBank.display();

console.log(`===========STEP 2=============`);
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Open Time is=> ${sbiBank.openTime}`);
console.log(`SBI Bank Close Time is=> ${sbiBank.closeTime}`);

console.log(`___________________________________________`);

console.log(`The Bank Name is=> ${axisBank.bankName}`);
console.log(`AXIS Bank Close Time is=> ${axisBank.closeTime}`);
console.log(`___________________________________________`);


console.log(`The Bank Name is=> ${yesBank.bankName}`);
console.log(`The Branch Code is=> ${yesBank.branchCode}`);
console.log(`YES Bank Open Time is=> ${yesBank.openTime}`);