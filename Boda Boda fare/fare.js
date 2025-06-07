//Fare calculation rules;
//1. Base Fare =  KES 50 (applied to every ride).
//2. Per Kilometer Charge; KES 15 for every kilometer traveled.

//  Boda Boda ride fare calculator
  function calculateBodaFare (distanceInKm) {
    //Total fare cost
    const baseFare = 50;
    const chargePerKilometer = 15;
    const rideFare = chargePerKilometer * distanceInKm;
    const totalFare = baseFare + rideFare;
 
    // Display result
console.log (`uko kwote? Io ni ${distanceInKm}`);
console.log (`Ukikalia pikipiki ni ${baseFare}`);
console.log (`Mpaka huko ni ${rideFare}`)
console.log (`Yote itakuwa ${totalFare}`)
}
// Ask for how many kilometer the user wants
const bodaFareInput = prompt ('Unafika wapi mkubwa? Kilometer ngapi?');
const bodaDistance = Number (bodaFareInput)

// for fare details
const fare = calculateBodaFare (bodaDistance)
