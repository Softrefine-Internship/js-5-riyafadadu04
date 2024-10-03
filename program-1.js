// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    
    displayPerson() {
        console.log(`${this.name} is ${this.age} years old from ${this.country}`);
    }
}

//instances of the 'Person' class
const person1 = new Person("Person-1", 20, "INDIA");
const person2 = new Person("Person-2", 25, "USA");

//displaying the details of the instances
person1.displayPerson();
person2.displayPerson();
