"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(targetCtor) {
    console.log('Logging...');
    console.log(targetCtor);
}
function LoggerFactory(logText) {
    return function (ctor) {
        console.log('Logging in new logger');
        console.log(logText);
        console.log(ctor);
    };
}
let NewPerson = class NewPerson {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
NewPerson = __decorate([
    LoggerFactory('new logger'),
    LoggerFactory('Log a person')
], NewPerson);
const pers = new NewPerson();
console.log(pers);
