import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
asus.a();

console.log("");

let macbook = new MacBook("M1 Pro 2019", false, false);
console.log(macbook);
macbook.b();
