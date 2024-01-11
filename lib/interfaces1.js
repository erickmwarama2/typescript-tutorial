"use strict";
let user1;
user1 = {
    firstName: "Erick",
    lastName: "Mutwiri",
    age: 31,
    greet(phrase) {
        console.log(`${phrase} ${this.firstName} ${this.lastName}`);
    }
};
user1.greet("Hi there, I am");
class PersonUser {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
    }
}
const psUser1 = new PersonUser("Henry", "Ford", 100);
psUser1.greet("Hello there, I am");
;
