"use strict";
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 1] = "ADMIN";
    UserRole[UserRole["AUTHOR"] = 2] = "AUTHOR";
    UserRole[UserRole["READ_ONLY"] = 3] = "READ_ONLY";
})(UserRole || (UserRole = {}));
;
const person = {
    name: "Erick",
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    role: [UserRole.AUTHOR, 'author']
};
let favouriteActivities;
favouriteActivities = ['Sports'];
favouriteActivities.push('Music');
console.log(person);
console.log(person.age);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
person.hobbies.forEach((hobby) => {
    console.log(hobby.concat(' is a hobby'));
});
console.log('The person role is ', person.role[0]);
if (person.role[0] === UserRole.AUTHOR) {
    console.log("the user is an author");
    console.log("he must be an author");
}
