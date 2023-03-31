function getName() {
  return "Hello my name is Sofyan";
}

console.log(getName());

// Jika menggunakan void makan function tidak bisa menggunakan return
function printName(): void {
  console.log("Muhammad Sofyan");
}

printName();

function mathSum(val1: number, val2: number) {
  return val1 + val2;
}

console.log(mathSum(5, 6));

// function as type

type Kali = (x: number, y: number) => number;

const Result: Kali = (x, y) => {
  return x * y;
};

console.log(Result(5, 5));
