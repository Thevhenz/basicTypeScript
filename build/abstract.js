"use strict";
class Vehicle {
    startEngine() {
        console.log("Engine Start");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log("Car is have " + car.wheels + " wheels");
car.startEngine();
let motorcycle = new Motorcycle();
console.log("Motorcycle is have " + motorcycle.wheels + " wheels");
motorcycle.startEngine();
