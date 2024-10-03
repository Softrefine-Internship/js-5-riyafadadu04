// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
  constructor(species, sound) {
    if (typeof species !== "string" || typeof sound !== "string") {
      throw new Error("species and sound must be a string");
  }
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.species} dog makes ${this.sound} sound `);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    if (typeof color!== "string") {
      throw new Error("color must be a string");
    }
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    console.log(`${this.color} ${this.species} dog makes ${this.sound} sound 😆`);
  }
}

const dog = new Dog("Labrador", "Woof", "Brown");
dog.makeSound();
