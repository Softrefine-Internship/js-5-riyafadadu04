// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    if (
      typeof make !== "string" ||
      typeof model !== "string"
    ) {
      throw new Error("Model and make must be a string");
    }
    if (typeof year !== "number" || year < 0) {
      throw new Error("Year must be a valid year");
    }
    this.make = make;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    if (typeof doors !== "number" || doors < 0) {
      throw new Error("Door must be a positive number");
    }
    super(make, model, year);
    this.doors = doors;
  }
  display() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Year: ${this.year} , Number of Doors: ${this.doors}`
    );
  }
}

let myCar = new Car("Toyota", "Camry", 2020, 4);

myCar.display();
