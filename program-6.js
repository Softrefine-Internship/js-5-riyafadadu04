// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    if (typeof salary !== "number" || salary < 0 ) {
      throw new Error("salary must be a number");
    }
    if (typeof name !== "string" ){
        throw new Error("Name must be a string");
    }
    this.name = name;
    this.salary = salary;
  }
  annualSalary() {
    return (this.salary * 12).toFixed(2);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    if (typeof department !== "string") {
      throw new Error("Department must be string");
    }
    super(name, salary);
    this.department = department;
  }
  annualSalary() {
    const bonuses = 2000;
    return (this.salary * 12 + bonuses).toFixed(2);
  }
}

const employee = new Employee("employee", 30000);
console.log(
  `The annual salary of ${employee.name} is $${employee.annualSalary()}.`
);

const manager = new Manager("manager", 40000.8895, "Sales");
console.log(
  `The annual salary with bonuse of ${manager.name} in ${
    manager.department
  } department is $${manager.annualSalary()}.`
);
