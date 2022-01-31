class Person {
    constructor(name = 'unknown', age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
    }
}

Person.prototype.teeth = 32;

const p1 = new Person('Ramón', 32);
const p2 = new Person('Luisa', 34);

p1.height = 180;

console.log(p1);
console.log(p2);

p1.greetings();
p2.greetings();

class Alumno extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greetings() {
        super.greetings();
        console.log(`Estudio ${this.course}`);
    }
}

const a1 = new Alumno('Rosa', 25, 'Angular');
a1.greetings();
console.log(a1.teeth);
