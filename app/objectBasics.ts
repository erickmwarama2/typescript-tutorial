enum UserRole {
    ADMIN = 1,
    AUTHOR = 2,
    READ_ONLY = 3
};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [UserRole, string];
} = {
    name: "Erick",
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: [UserRole.AUTHOR, 'author']
};


let favouriteActivities: string[];
favouriteActivities = ['Sports'];
favouriteActivities.push('Music');

console.log(person);
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

person.hobbies.forEach((hobby: string) => {
    console.log(hobby.concat(' is a hobby'));
});

console.log('The person role is ', person.role[0]);

if (person.role[0] === UserRole.AUTHOR) {
    console.log("the user is an author");
    console.log("he must be an author");
}