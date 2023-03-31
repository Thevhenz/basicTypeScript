"use strict";
function getData(value) {
    return value;
}
console.log(getData("Muhammad Sofyan").length);
console.log(getData(123).length); // Ini tidak terbaca error jika menggunkan type any
// Generic
function myData(value) {
    return value;
}
console.log(myData("Muhammad Sofyan").length); // Ini akan terbaca sebagai type string.
// console.log(myData(123).length); // Ini akan terbaca sebagai type number dan akan mengeluarkan error.
// Generic Arrow Function
const getMyData = (value) => {
    return value;
};
console.log(getMyData("Muhammad Sofyan").length); // Ini akan terbaca sebagai type string.
// console.log(getMyData(123).length); // Ini akan terbaca sebagai type number dan akan mengeluarkan error.
