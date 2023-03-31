"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    powerOn() {
        console.log("Laptop is power on.");
    }
    powerOff() {
        console.log("Laptop is power off.");
    }
}
let asus = new Asus("Asus X450LP", false);
console.log(asus.name);
console.log("is gaming laptop ? " + asus.isGaming);
asus.powerOff();
console.log("");
class MacBook {
    constructor(name, isKeyboardLight) {
        this.name = name;
        this.isKeyboardLight = isKeyboardLight;
    }
    powerOn() {
        console.log("Laptop is power on.");
    }
    powerOff() {
        console.log("Laptop is power off.");
    }
}
let mac = new MacBook("MacBook Pro M1 2020", true);
console.log(mac.name);
console.log("Has keyboard light ? " + mac.isKeyboardLight);
asus.powerOn();
