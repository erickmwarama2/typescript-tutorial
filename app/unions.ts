interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'animal';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({type: 'bird', flyingSpeed: 50})