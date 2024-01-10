"use strict";
class Department {
    // name: string;
    // private id: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get deptName() {
        return this.name;
    }
    set deptName(value) {
        this.name = value[0].toUpperCase().concat(value.substring(1));
    }
    describe() {
        console.log(`This is the ${this.name} department with id ${this.id}`);
    }
    static createDept(name) {
        return { name };
    }
}
class ITDepartment extends Department {
    constructor(admins, id, name) {
        super(id, name);
        this.admins = admins;
    }
    describe() {
        console.log("Description of the IT dept");
    }
}
const itdept = new ITDepartment(["Erick", "Kevin", "Lilian"], "dept5", "Technology");
itdept.describe();
console.log("Administrators: ", itdept.admins);
const dpt = new Department("dept1", "Sales");
console.log(dpt);
dpt.describe();
const accDpt = new Department("dept2", "Accounting");
const dptCopy = { describe: dpt.describe };
dptCopy.describe.apply(accDpt);
console.log("---------------------------------");
console.log("department names");
console.log(dpt.deptName);
console.log(itdept.deptName);
console.log(accDpt.deptName);
dpt.deptName = "marketing";
itdept.deptName = 'engineering';
accDpt.deptName = 'finance';
console.log("---------------------------------");
console.log("department names");
console.log(dpt.deptName);
console.log(itdept.deptName);
console.log(accDpt.deptName);
