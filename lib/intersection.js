"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function printEmployeeInfo(emp) {
    console.log("Name: ", emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: ", emp.privileges);
    }
    else {
        console.log("Not an admin");
    }
}
printEmployeeInfo({ name: "Erick", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving my car");
    }
}
class Truck {
    drive() {
        console.log("Driving my truck");
    }
    loadCargo(amt) {
        console.log(`Loading ${amt} kgs of cargo`);
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2);
