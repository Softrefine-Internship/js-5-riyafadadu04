// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(name, department = []) {
    if (!Array.isArray(department) || typeof name !== "string") {
      throw new Error("Invalid input parameter");
    }
    this.name = name;
    this.department = department;
  }

  display() {
    if (this.department.length === 0) {
      console.log(`No department available in ${this.name}.`);
    } else {
      console.log(`department of ${this.name}: ${this.department.join(" , ")}`);
    }
  }

  addDept(deptName) {
    if (this.department.includes(deptName)) {
      console.log(`Department "${deptName}" already exists in ${this.name}.`);
    } else {
      this.department.push(deptName);
      console.log(`Added Department "${deptName}" to ${this.name}.`);
    }
  }

  removeDept(deptName) {
    const index = this.department.indexOf(deptName);
    if (index !== -1) {
      this.department.splice(index, 1);
      console.log(`Removed Department "${deptName}" from ${this.name}.`);
    } else {
      console.log(`Department "${deptName}" not found in ${this.name}.`);
    }
  }
}

let university = new University("GTU", [
  "Computer Science",
  "Civil",
  "Electric",
]);

university.addDept("Mechanical");
university.removeDept("Civil");
university.display();
