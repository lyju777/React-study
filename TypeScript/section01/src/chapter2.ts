class Employee {
  private name: string;
  protected age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("할일");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    console.log(this.age);
    // this.name;
  }
}

const employee = new Employee("A", 24, "developer");
// employee.name = "홍길동";
console.log(employee);
