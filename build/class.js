"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
let user = new User("Budi", 26);
user.setName("Dani");
// user.getName();
console.log(user);
// Public = bisa di akses di semua class / dari luar class.
// Protected = hanya bisa di akses dari class tersebut, dan class turnannya.
// Private = hanya bisa di akses dari class itu sendiri.
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    // Static Method
    static getNameRole() {
        return "Ini static method";
    }
    // Setter
    set email(value) {
        if (value.length < 5) {
            this._email = "Email Salah!";
        }
        else {
            this._email = value;
        }
    }
    // Getter
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin"; // Static Property
let admin = new Admin("Nasuha", 25, "0813473754");
let sttcp = Admin.getRoleName; // Memanggil static property
let sttcm = Admin.getNameRole(); // Memanggil static method
admin.getRole();
admin.getName();
admin.email = "fac@gm.com";
console.log(admin);
console.log(sttcp);
console.log(sttcm);
