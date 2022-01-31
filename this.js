console.log(this);

function foo() {
    console.log(this);
}

foo();

const obj = {
    name: 'Pepe',
};
obj.method = foo;

obj.method();

new foo();

const obj2 = {
    name: 'Pepe2',
};

foo.apply(obj2);
foo.call(obj2);

const barr = () => {
    console.log(this);
};

barr();

obj.method2 = barr;

obj.method2();

// new barr(); Error

barr.apply(obj2);

const obj3 = {
    name: 'Pepe',
    foo: function () {
        console.log(this);
    },
    fooAsync: function () {
        setTimeout(this.foo.bind(this), 500);
    },
};
obj3.foo();
obj3.fooAsync();
