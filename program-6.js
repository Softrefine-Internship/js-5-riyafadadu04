// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    annualSalary(){
        console.log(`The annual salary of ${this.name} is $${(this.salary * 12).toFixed(2)}.`);
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    annualSalary(){
        const bonuses = 2000;
        console.log(`The annual salary with bonuse of ${this.name} in ${this.department} department is $${((this.salary * 12) + bonuses).toFixed(2)}.`);
    }
}

const employee = new Employee('employee', 30000);
employee.annualSalary();

const manager = new Manager('manager', 40000.8895, 'Sales');
manager.annualSalary();
