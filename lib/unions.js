"use strict";
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird':
            console.log(`Moving with speed: ${animal.flyingSpeed}`);
            break;
        case 'animal':
            console.log(`Moving with speed: ${animal.runningSpeed}`);
            break;
        default:
    }
}
moveAnimal({ type: 'bird', flyingSpeed: 50 });
