class Employee {
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("할일");
    }
}
const employeeB = new Employee("B", 24, "developer");
console.log(employeeB);
export {};
