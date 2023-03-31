"use strict";
// Generic Class
class List {
    // Tidak menggunakan Rest parameter
    //   constructor(elements: T[]) {
    //     this.data = elements;
    //   }
    // Menggunakan Rest parameter
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let angka = new List<number>([1, 2, 3]); // Tidak menggunakan Rest parameter
let singleType = new List(1, 2, 3); // Menggunakan Rest parameter
singleType.add(4);
singleType.addMultiple(5, 6, 7);
console.log(singleType.getAll());
let multiType = new List(1, "a", 2, "b");
multiType.add(3);
multiType.addMultiple("c", 4, "d");
console.log(multiType.getAll());
