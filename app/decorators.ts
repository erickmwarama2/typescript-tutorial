function Logger(targetCtor: Function) {
    console.log('Logging...');
    console.log(targetCtor);
}

function LoggerFactory(logText: string) {
    return function(ctor: Function) {
        console.log('Logging in new logger');
        console.log(logText);
        console.log(ctor);
    }
}

@LoggerFactory('new logger')
@LoggerFactory('Log a person')
class NewPerson {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new NewPerson();
console.log(pers);