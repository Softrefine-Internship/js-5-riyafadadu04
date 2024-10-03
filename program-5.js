// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(shapeName) {
    if (typeof shapeName !== "string") {
      throw new Error("shapeName must be a string");
    }
    this.shapeName = shapeName;
  }

  calculateArea() {
    throw new Error("Subclasses must implement this method");
  }
}

class Circle extends Shape {
  constructor(shapeName, radius) {
    if (typeof radius !== "number" || radius < 0) {
      throw new Error("radius must be a positive number");
    }
    super(shapeName);
    this.radius = radius;
  }

  calculateArea() {
    let area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    return area;
  }
}

class Triangle extends Shape {
  constructor(shapeName, base, height) {
    if (
      typeof base !== "number" ||
      typeof height !== "number" ||
      base < 0 ||
      height < 0
    ) {
      throw new Error("Base and height must be positive numbers");
    }
    super(shapeName);
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    let area = (0.5 * this.base * this.height).toFixed(2);
    return area;
  }
}

let circle = new Circle("Circle", 5);
console.log(
  `${circle.shapeName} with radius ${
    circle.radius
  } and their area is ${circle.calculateArea()}`
);

let triangle = new Triangle("Triangle", 5, 3);
console.log(
  `${triangle.shapeName} with base ${triangle.base} and height ${
    triangle.height
  } and their area is ${triangle.calculateArea()}`
);
