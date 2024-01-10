abstract class Department1 {
    constructor(private id: string, private name: string) {

    }

    abstract describe (): void;
}

class ITDepartment1 extends Department1 {
    constructor(id: string, name: string) {
        super(id, name);
    }

    describe(): void {
        console.log("Describing the IT dept");
    }
}