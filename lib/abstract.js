"use strict";
class Department1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ITDepartment1 extends Department1 {
    constructor(id, name) {
        super(id, name);
    }
    describe() {
        console.log("Describing the IT dept");
    }
}
