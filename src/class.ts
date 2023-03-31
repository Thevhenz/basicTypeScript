export class User {
  constructor(public name: string, public age: number) {}

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

let user = new User("Budi", 26);
user.setName("Dani");
// user.getName();

console.log(user);

// Public = bisa di akses di semua class / dari luar class.
// Protected = hanya bisa di akses dari class tersebut, dan class turnannya.
// Private = hanya bisa di akses dari class itu sendiri.

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin"; // Static Property

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
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
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email Salah!";
    } else {
      this._email = value;
    }
  }

  // Getter
  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Nasuha", 25, "0813473754");

let sttcp = Admin.getRoleName; // Memanggil static property
let sttcm = Admin.getNameRole(); // Memanggil static method

admin.getRole();
admin.getName();

admin.email = "fac@gm.com";

console.log(admin);

console.log(sttcp);
console.log(sttcm);
