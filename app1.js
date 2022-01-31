/* eslint-disable no-unused-vars */

// Notación literas o JSON
const obj1 = {
    name: 'Pepe',
    age: 33,
    foo: function () {},
};

const obj2 = {
    name: 'Juan',
    age: 34,
};

console.log(obj1);
console.log(obj2);

const foo = function (bar = 23) {};

// Ejecucion

foo(67); // Function
obj1.foo(); // Method
const x = new foo(); // Constructor
console.log(x);

// Patron Constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greetings = function () {
        console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
    };
}

const p1 = new Person('Ramón', 32);
const p2 = new Person('Luisa', 34);

console.log(p1);
console.log(p2);

p1.greetings();
p2.greetings();
