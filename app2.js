/* eslint-disable no-unused-vars */

// Notación literas o JSON
const obj1 = {
    name: 'Pepe',
    age: 33,
};

const obj2 = {
    name: 'Juan',
    age: 34,
};

console.log(obj1);
console.log(obj2);

// Patron Constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.teeth = 32;
Person.prototype.greetings = function () {
    console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
};

Person.foo = function () {
    console.log('Propiedad estática');
};

const p1 = new Person('Ramón', 32);
const p2 = new Person('Luisa', 34);

console.log(p1);
console.log(p2);

p1.greetings();
p2.greetings();

Person.foo();

console.log(p1.teeth);
p2.teeth = 30;
console.log(p2.teeth);

Object.freeze();
Array.isArray();
Math.PI;
JSON.stringify();

// eslint-disable-next-line no-prototype-builtins
new Object().hasOwnProperty();
new Array().push();
