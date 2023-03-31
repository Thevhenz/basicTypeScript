abstract class Vehicle {
  abstract wheels: number;

  startEngine(): void {
    console.log("Engine Start");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log("Car is have " + car.wheels + " wheels");
car.startEngine();

let motorcycle = new Motorcycle();
console.log("Motorcycle is have " + motorcycle.wheels + " wheels");
motorcycle.startEngine();
