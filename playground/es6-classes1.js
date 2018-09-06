class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    constructor(name = 'Anonymous', age = '0'){
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
    getGreeting() {
        return 'hi';
    }
    
}

class Traveler extends Person {
    
}

const me = new Person('Dev');
console.log(me)