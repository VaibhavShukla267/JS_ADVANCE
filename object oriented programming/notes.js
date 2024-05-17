//  JavaScript does have classes. Classes were introduced in ECMAScript 2015 (also known as ES6) as a syntactical sugar over JavaScript's existing prototype-based inheritance. This means that while classes provide a more traditional and familiar syntax for creating objects and dealing with inheritance, they do not fundamentally change how JavaScript's inheritance works under the hood.
// OOP is programming paradigm which means code ka structure,style kysa hota hai


// Objects is collection of properties and methods


// Why use OOP??
// Due to spagdi code which means code is so meshed up that nothing reused again.
// Parts of oops


// Objects literal{}


// -Construtor
// -Prototypes
// -Classes
// =Instances(new,this)


// ## 4pillars
// Abstracttion
// Encapsulation
// Inheritance
// Polymorphism




 // Defining a class
class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
