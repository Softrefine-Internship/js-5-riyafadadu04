//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    if (typeof width !== "number" || typeof height !== "number" || width < 0 || height < 0) {
      throw new Error("width and height must be a positive number");
    }
    this.width = width;
    this.height = height;
  }

  AreaOfRectangle() {
    return (this.width * this.height).toFixed(2);
  }

  PerimeterOfRectangle() {
    return (2 * (this.width + this.height)).toFixed(2);
  }
}

// Create an instance of the Rectangle class
const rectangle1 = new Rectangle(8.1, 10.222);
const rectangle2 = new Rectangle(10.2, 20.5);

// Calculate area and perimeter
console.log(
  `Rectange1 Area: ${rectangle1.AreaOfRectangle()} , Rectange1 Perimeter: ${rectangle1.PerimeterOfRectangle()}`
);
console.log(
  `Rectange2 Area: ${rectangle2.AreaOfRectangle()} , Rectange2 Perimeter: ${rectangle2.PerimeterOfRectangle()}`
);
