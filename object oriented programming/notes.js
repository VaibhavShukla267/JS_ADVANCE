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






// Static methods can be created in JavaScript using the static keyword like in other programming languages. Static values can be accessed only using the class name and not using 'this' keyword. Else it will lead to an error.

// Inheritance

// In JavaScript, one class can inherit another class using the extends keyword. The subclass inherits all the methods ( both static and non-static ) of the parent class.

// Inheritance enables the reusability and extensibility of a given class.

// JavaScript uses prototypal inheritance which is quite complex and unreadable. But, now you have 'extends' keyword which makes it easy to inherit the existing classes.

// Keyword super can be used to refer to base class methods/constructors from a subclass


class Vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
}

class Car extends Vehicle{
    constructor(make,model,fuelType,regNo){
        super(make,model);
        this.fuelType=fuelType;
        this.regNo=regNo;
    }

    getDetails(){
        console.log(`${this.make},${this.model},${this.fuelType},${this.regNo}`)
    }

    
}
let car1=new Car('2019','Audi','CNG',"2345");
car1.getDetails()



class Mobile{
    constructor(MName,ModelNo){
        this.MName=MName;
        this.ModelNo=ModelNo;
    }

}

class Specifications extends Mobile{
    constructor(MName,ModelNo,NType,Storage){
        super(MName,ModelNo);
        this.NType=NType;
        this.Storage=Storage;
    }

    GetInfo(){
        console.log(` ${this.MName},${this.ModelNo},${this.NType},${this.Storage}`)
    }
}

let Mobile1=new Specifications('RealMe','re2323','5G','162GB')
Mobile1.GetInfo();