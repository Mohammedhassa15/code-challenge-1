# code-challenge-1

      PROJECT 1: CALCULATOR FOR BODABODA RIDE FARE
      This is a simple JavaScript calculator to estimate the cost of a BodaBoda ride based on distance traveled.
      
##  These are some rules that must be ahdered to
//Fare calculation rules;
## This one shows that no matter where you are going if you sit on the bike you have to pay this amount (KES 50)
//1. Base Fare =  KES 50 (applied to every ride).
## This one shows that you have this amount (KES 15) for every kilometer traveled
//2. Per Kilometer Charge; KES 15 for every kilometer traveled.

## this show the function for the fare calculator
  function calculateBodaFare (distanceInKm) {
    //Total fare cost
## this shows the base fare (KES 50)
    const baseFare = 50;
## this shows the charge for each kilometer travled
    const chargePerKilometer = 15;
## this one shows the chargeperkilometer multiplied by the distance in kilometer
    const rideFare = chargePerKilometer * distanceInKm;
## this shows the total amount the person is supposed to pay for the ride
    const totalFare = baseFare + rideFare;
 
## this one shows the distance in kilometers the person wants to travel
console.log (`uko kwote? Io ni ${distanceInKm}`);
## this one shows what they will pay no matter how far they are going
console.log (`Ukikalia pikipiki ni ${baseFare}`);
## this one shows the charge for the distance they are travelling
console.log (`Mpaka huko ni ${rideFare}`)
## this one shows the total fare 
console.log (`Yote itakuwa ${totalFare}`)
}
## this one shows the prompt the user gets
const bodaFareInput = prompt ('Unafika wapi mkubwa? Kilometer ngapi?');
# this one converts the string into a number
const bodaDistance = Number (bodaFareInput)
## this one shows the fare details for the ride
const fare = calculateBodaFare (bodaDistance)

## EXAMPLE:
if user puts in 5KM then,
basefare = 50;
perKM = 15 * 5
totalfare = 50 + 75 which will be (125)


       PROJECT 2; CALCULATOR FOR KENYAN CHAI INGREDIENTS
       This is a simple javascript  calculator for making Kenyan Chai

## These are the standard ingredients needed to make one cup of Kenyan Chai
// standard recipe for 1 cup of chai;
// 1. Water; 200ml
// 2. Milk: 50ml
// 3. Tea Leaves (Majani); 1 tablespoon
// 4. Sugar: 2 teaspoons


## This is the function for ingrdirnts calculator
// Ingredient calculator for making Chai Bora
function calculateChaiIngredients (numberOfCups) {
## this one shows the amount of cups the person wants to make multiplied by the ingredients to make one cup
## this one shows the amount of water needed for the Tea for one cup of Chai 
    const water = numberOfCups * 200;   // in mililitres
## this one shows the amount of milk needed for the Tea for one cup of Chai 
    const milk = numberOfCups * 50;     // in mililitres
## this one shows the amount of tablespoon (s) of Tea Leaves for one cup of Chai 
    const teaLeaves = numberOfCups * 1 // tablesppon
## this one shows the amount of sugar inTeaspoons for one cup of Chai 
    const sugar = numberOfCups * 2     // teaspoons


## this one shows what the user will after they put number of chai cups they want to make
## this one shows the amount  of cups they want to make
    console.log (`To make ${numberOfCups} cups of kenyan chai, you will need:`);
## this one shows the amount of cups of water they need to make number of cups of tea they want to amke
    console.log (`water ${water} ml`);
## this one shows the amount of milk for the number of cups of tea they want to make
    console.log (`milk ${milk} ml` );
## this one shows the amount of tablespoon of tea leaves for the number of cups of chai they want to make
    console.log (`teaLeaves ${teaLeaves} tablespoon`);
## this one shows tha mount of teaspoon(s) of sugar they need to make the number of cups of chai they want to make
    console.log (`sugar ${sugar} teaspoons`)
## this one tells the person to enjoy their chai
    console.log ("Enjoy your Chai Bora!");

}
## This is the where the user is prompted to put in the number of cups they want to make
const numberOfChaiCupsInput = prompt("Habari! how many cups of kenyan chai do you want to make?");
# this one converts the string into a number
const chaiCups = Number (numberOfChaiCupsInput);
calculateChaiIngredients(chaiCups)




        PROJECT 3: MONEY TRANSACTION
        This is a simple javascript calculator for calculating transaction fee
## this one shows the basic requirements for sending certain amount fo money
        // simplified fee structure:
## this one shows that there is transaction fee of 0.0015 of the transaction amount
// 1. The basic transaction fee is 1.5% of the transaction amount.
## this one shows if the amount to send is less than 10 hte fee charge is 10 and there is charge of 70 if the amount to send is more than 70
// 2. However, there's a minimum fee of KES 10. If 1.5% of the amount is less than 10, rhe fee charged is KES 10.
// 3. Ther's also a maximum fee of of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.

// Calculator for Money Transaction
function estimateTransactionFee (amountToSend) {
## this one shows the percentage fee
    const percentageFee = amountToSend * 1.5 / 100   // This is percentage
    let transactionFee;

      // calculation for the tranaction fee
## if the amount to end is less than 10 the carge fee is 10
    if (percentageFee < 10) {
        transactionFee = 10;
## if the amount to send is more than 70 the charge fee is 70
    } else if (percentageFee > 70) {
       transactionFee = 70
    }else {
## otherwise the amount to send is significantly higher then
        transactionFee = percentageFee
    }
## this is for the total amount to send
const totalAmount = amountToSend + transactionFee;

// Display result
## this one shows the amount wants to send
console.log (`Sending KES ${amountToSend}`);
## this one shows the transaction fee
console.log (`Calculated transaction Fee: KES ${transactionFee}`)
## this one shows the total amount ot transact
console.log (`Total amount to transact: KES ${totalAmount}`);
## this is just for user treatment
console.log ("Send Money Securely")


}
// Ask input for how much the person wants to send
## this is for the user input prompt
const transactionFeeInput = prompt ("Unatuma ngapi? (KES)");
# this one converts the string into a number
const amountToSend = Number (transactionFeeInput);
estimateTransactionFee (amountToSend);


# written by Mohammed Hassan