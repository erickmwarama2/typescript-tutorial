interface Person {
    firstName: string;
    lastName: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    firstName: "Erick",
    lastName:"Mutwiri",
    age: 31,
    greet(phrase: string) {
        console.log(`${phrase} ${this.firstName} ${this.lastName}`);
    }
};

user1.greet("Hi there, I am");

class PersonUser implements Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
    }
}

const psUser1 = new PersonUser("Henry", "Ford", 100);
psUser1.greet("Hello there, I am");;
