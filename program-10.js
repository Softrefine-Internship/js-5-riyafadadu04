// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(id, name, price) {
    if (
      typeof price !== "number" ||
      price < 0 ||
      typeof id !== "number"
    ) {
      throw new Error("price , id must be positive number");
    }
    if(typeof name !== "string"){
      throw new Error("name must be a string");
    }
    this.id = id;
    this.name = name;
    this.price = price;
  }

  priceWithQuantity(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    if (typeof warrantyPeriod !== "number" || warrantyPeriod <= 0) {
      throw new Error("warranty period must be positive number");
    }
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  priceWithQuantity(quantity) {
    return this.price * quantity;
  }
}

const product = new Product(100, "Toothpaste", 5);
console.log(
  `Total Price of ${product.name} is $${product.priceWithQuantity(3)}`
);

const personalCareProduct = new PersonalCareProduct(101, "Shampoo", 10, 3);
console.log(
  `Total Price of ${personalCareProduct.name} with ${
    personalCareProduct.warrantyPeriod
  } year warranty Period is $${personalCareProduct.priceWithQuantity(5)}`
);
