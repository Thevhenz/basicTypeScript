import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard"; // Cara 1, jika ingin memanggil semua method dari Keyboard
import { b } from "./Keyboard"; // Cara 2, jika inigin memanggil salah satu method dari Keyboard

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  // Cara 1
  a(): void {
    console.log(Keyboard.a());
  }

  // Cara 2
  b(): void {
    console.log(b());
  }
}

export default BaseLaptop;
