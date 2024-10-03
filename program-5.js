// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(shapeName) {
    this.shapeName = shapeName;
  }

  calculateArea() {
    throw new Error('Subclasses must implement this method');
  }
}

class Circle extends Shape {
    constructor(shapeName, radius) {
        super(shapeName);
        this.radius = radius;
    }
    
    calculateArea() {
        let area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        console.log(`${this.shapeName} with radius ${this.radius} and their area is ${area}`);
    }
}

class Triangle extends Shape {
    constructor(shapeName, base, height) {
        super(shapeName);
        this.base = base;
        this.height = height;
    }
    
    calculateArea() {
        let area = (0.5 * this.base * this.height).toFixed(2);
        console.log(`${this.shapeName} wuth base ${this.base} , height ${this.height} and their area is ${area}`);
    }
}
 

let circle = new Circle('Circle', 5);
circle.calculateArea();


let triangle = new Triangle('Triangle', 5, 3);
triangle.calculateArea();