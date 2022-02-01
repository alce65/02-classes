class PersonTS {
    name: string;
    age: number;
    height: number;
    constructor(name = 'unknown', age: number) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
    }
}

let p1 = new PersonTS('Pepe', 22);
p1.height = 180;
