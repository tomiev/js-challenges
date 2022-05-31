// TASK: Calculate if there is enough fuel to make it to the petrol station

const enoughFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft >= (distanceToPump / mpg);
}

// Tests
console.log(enoughFuel(50, 25, 2)); // expect true
console.log(enoughFuel(100, 50, 1)); // expect false
