"use strict";
console.log("Hello World");
//Basic Types
let id = 3;
let fname = "Joe";
let alive = true;
let x = 'Hello';
let age;
age = 30;
x = 30;
//Arrays
let names = ['Jill', 'Bob', 'Jane'];
names.push('Jimbo');
//names.push(5)
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Joe'],
    [2, 'Jack']
];
//Union
let union;
union = 31;
union = '31';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: 'Jane'
};
//Type Assertion
let cid = 1;
let customerId = cid;
//let customerId = cid as number
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    //Private property - only accessible within the class
    // Public - default, accessible anywhere
    // Protected - only accessible within class & extensions
    constructor(id, name) {
        console.log(123);
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
console.log(brad.register());
//Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Sean', 'CEO');
console.log(emp);
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'joe', 'jill']);
//numArray.push('hello') - generics instead of 'any' means it can be any 1 type that is declared when initialized
strArray.push('Drew');
