class Person {
    name;
    age;
    height;
    #id;
    static hasSoul = true;
    static foo() {}
    constructor(name = 'unknown', age) {
        this.#id = parseInt(Math.random() * 1_000_000);
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(
            `Hola, soy ${this.name}, y tengo ${this.age} años. Mi id es ${
                this.#id
            }`
        );
    }
    changeId() {
        this.#id = this.name + this.age;
    }
}

Person.prototype.teeth = 32;
Person.hasSoul = false;
Person.x = 23;

const p1 = new Person('Ramón', 32);
const p2 = new Person('Luisa', 34);

p1.height = 180;
p1.weapon = 'sword';

console.log(p1);
console.log(p2);

p1.greetings();
p2.greetings();

// console.log(p1.#id);

p1.changeId();
p1.greetings();

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
