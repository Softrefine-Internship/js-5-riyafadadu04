// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, year) {
    if (typeof year !== "number" || year < 0) {
      throw new Error("year must be a number");
    }
    if (typeof title !== "string" || typeof author !== "string") {
      throw new Error("title and author must be a string");
    }
    this.title = title;
    this.author = author;
    this.year = year;
  }
  display() {
    console.log(
      `Book name : ${this.title} , author : ${this.author} , publication year : ${this.year}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    if (typeof price !== "number" || price < 0) {
      throw new Error("price must be a number");
    }
    super(title, author, year);
    this.price = price;
  }
  display() {
    console.log(
      `Book name : ${this.title} , author : ${this.author} , publication year : ${this.year} , price : $${this.price} `
    );
  }
}

let book = new Book("My Book", "Author", 2000);
book.display();

let ebook = new Ebook("My EBook", "E-Author", 2020, 100);
ebook.display();
