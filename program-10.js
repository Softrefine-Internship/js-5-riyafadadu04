// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  priceWithQuantity(quantity) {
    return `Total Price of ${this.name} is $${this.price * quantity}`;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  priceWithQuantity(quantity) {
    return `Total Price of ${this.name} with ${
      this.warrantyPeriod
    } warranty Period is $${this.price * quantity}`;
  }
}

const product = new Product(100, "Toothpaste", 5);
console.log(product.priceWithQuantity(3));

const personalCareProduct = new PersonalCareProduct(101, "Shampoo", 10, 3);
console.log(personalCareProduct.priceWithQuantity(5));
