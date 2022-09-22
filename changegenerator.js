//Generates change

function generateChange(cents){
    console.log("Dollars:" , Math.floor (cents / 100));
    cents = cents % 100;
    console.log("Quarters:" , Math.floor (cents / 25));
    cents = cents % 25;
    console.log("Dimes:" , Math.floor (cents / 10));
    cents = cents % 10;
    console.log("Nickels:" , Math.floor (cents / 5));
    cents = cents % 5;
    console.log("Pennies:" , cents);
}
generateChange(173)