"use strict";
//enum adalah increment dari nilai sebelumnya adalah integer, jika berisi string maka wajib mendeklarasikan index nya
// numeric enums
// Secara default index enum adalah 0, tapi kita bisa mengubah index tersebut jika kita mendeklarasikan index nya.
// Index selanjutnya tergantung pada apa yang kita deklarasikan pada index sebelumnya.
// enum Month {
//   Jan = 1,
//   Feb,
//   Mar,
//   Apr,
//   May,
//   Jun,
//   Jul,
// }
// console.log(Month);
// console.log(Month.Jun);
//string enums
var Month;
(function (Month) {
    Month["Jan"] = "January";
    Month["Feb"] = "February";
    Month["Mar"] = "March";
    Month["Apr"] = "April";
    Month["May"] = "May";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.Feb);
