type Admin = {
    name: string;
    privileges: string[];
};
type Employee = {
    name: string;
    startDate: Date;
};

type MyElevatedEmployee = Admin & Employee;

const e1: MyElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Mixable = number | string;
type MyNumeric = number | boolean;

type Universal = Mixable & MyNumeric;

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log("Name: ", emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: ", emp.privileges);
    } else {
        console.log("Not an admin");
    }
}

printEmployeeInfo({name: "Erick", startDate: new Date()});

class Car {
    drive() {
        console.log("Driving my car");
    }
}

class Truck {
    drive() {
        console.log("Driving my truck");
    }

    loadCargo(amt: number) {
        console.log(`Loading ${amt} kgs of cargo`);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);