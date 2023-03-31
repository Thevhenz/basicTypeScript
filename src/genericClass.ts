// Generic Class
class List<T> {
  private data: T[];

  // Tidak menggunakan Rest parameter
  //   constructor(elements: T[]) {
  //     this.data = elements;
  //   }

  // Menggunakan Rest parameter
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// let angka = new List<number>([1, 2, 3]); // Tidak menggunakan Rest parameter
let singleType = new List<number>(1, 2, 3); // Menggunakan Rest parameter
singleType.add(4);
singleType.addMultiple(5, 6, 7);
console.log(singleType.getAll());

let multiType = new List<number | string>(1, "a", 2, "b");
multiType.add(3);
multiType.addMultiple("c", 4, "d");
console.log(multiType.getAll());
