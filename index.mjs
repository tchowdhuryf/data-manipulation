// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//practical math - cross country road trip
const totalDistance = 1500; //total distance to travel for the trip
const fuelBudget = 175; //fuel budget to spend
const fuelCost = 3; //average fuel cost per gallon

// fuel used at different speeds e.g. at 55mph fuel consumed is 30mpg
const fuelUsage = [
    [55, 30],
    [60, 28],
    [75, 23],
];

//accessing each array variable speed and mpg and calculating with them
fuelUsage.forEach(([speed, mpg]) => {
    const gallonsNeeded = totalDistance / mpg;      //gallons of fuel need for each speed
    const fuelExpense = gallonsNeeded * fuelCost;   //total cost of fuel for the trip at each speed
    const time = totalDistance / speed;             //total time need for trip at each speed
    const withinBudget = fuelExpense <= fuelBudget; //checking if we can afford to speed
    
    //toFixed limits the number to two decimal places
    const result = `
      Traveling at ${speed} mph:
      - Gallons needed: ${gallonsNeeded.toFixed(2)} gallons
      - Fuel expense: $${fuelExpense.toFixed(2)}
      - Trip Time: ${time.toFixed(2)} hours
      - Within Budget: ${withinBudget ? 'Yes' : 'No'}
    `;
  
    console.log(result);
});