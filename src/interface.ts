interface Laptop {
  name: string;

  powerOn(): void;
  powerOff(): void;
}

class Asus implements Laptop {
  //   name: string = "Asus X450LCP";
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  powerOn(): void {
    console.log("Laptop is power on.");
  }
  powerOff(): void {
    console.log("Laptop is power off.");
  }
}

let asus = new Asus("Asus X450LP", false);
console.log(asus.name);
console.log("is gaming laptop ? " + asus.isGaming);
asus.powerOff();

console.log("");

class MacBook implements Laptop {
  //   name: string = "MacBook Pro M1 2020";
  name: string;
  isKeyboardLight: boolean;

  constructor(name: string, isKeyboardLight: boolean) {
    this.name = name;
    this.isKeyboardLight = isKeyboardLight;
  }

  powerOn(): void {
    console.log("Laptop is power on.");
  }
  powerOff(): void {
    console.log("Laptop is power off.");
  }
}

let mac = new MacBook("MacBook Pro M1 2020", true);
console.log(mac.name);
console.log("Has keyboard light ? " + mac.isKeyboardLight);
asus.powerOn();
