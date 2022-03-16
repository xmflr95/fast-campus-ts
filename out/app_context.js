const person = {
    name: 'Kim min tae',
    age: 40,
    getAge() {
        return this.age;
    }
};
person.age;
person.getAge();
const age = person.getAge;
// age();
age.call(person);
class Person {
    constructor(name, age) {
        this.getName = () => this.name;
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this);
    }
    getAge() {
        return this.age;
    }
}
const p1 = new Person('Kim mintae', 30);
p1.getAge();
const myAge = p1.getAge;
myAge();
p1.getName();
const x = p1.getName;
x();
//# sourceMappingURL=app_context.js.map