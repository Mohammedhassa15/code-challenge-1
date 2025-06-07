
// standard recipe for 1 cup of chai;
// 1. Water; 200ml
// 2. Milk: 50ml
// 3. Tea Leaves (Majani); 1 tablespoon
// 4. Sugar: 2 teaspoons



// Ingredient calculator for making Chai Bora
function calculateChaiIngredients (numberOfCups) {
    // this will require amount to make one cup of Chai multiplied by number of cups
    const water = numberOfCups * 200;   // in mililitres
    const milk = numberOfCups * 50;     // in mililitres
    const teaLeaves = numberOfCups * 1 // tablesppon
    const sugar = numberOfCups * 2     // teaspoons

     // Display result

    console.log (`To make ${numberOfCups} cups of kenyan chai, you will need:`);
    console.log (`water ${water} ml`)
    console.log (`milk ${milk} ml` );
    console.log (`teaLeaves ${teaLeaves} tablespoon`);
    console.log (`sugar ${sugar} teaspoons`)
    console.log ("Enjoy your Chai Bora!");

}
   // Ask for input for how many cups of kenyan Chai Bora
const numberOfChaiCupsInput = prompt("Habari! how many cups of kenyan chai do you want to make?");
const chaiCups = Number (numberOfChaiCupsInput);
calculateChaiIngredients(chaiCups)
