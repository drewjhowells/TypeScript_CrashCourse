console.log("Hello World");

//Basic Types
let id : number = 3
let fname: String = "Joe"
let alive : boolean = true
let x: any = 'Hello'
let age: number
age = 30
x = 30

//Arrays
let names: string[] = ['Jill', 'Bob', 'Jane']
names.push('Jimbo')
//names.push(5)
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
let employee: [number, string][]
employee = [
    [1, 'Joe'],
    [2, 'Jack']
]

//Union
let union: string | number
union = 31
union = '31'

//Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right,
}
console.log(Direction1.Down)
enum Direction2 {
    Up='Up',
    Down = 'Down'
}
console.log(Direction2.Up)

//Object
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'Jane'
}

//Type Assertion
let cid: any = 1
let customerId = <number>cid
//let customerId = cid as number

//Functions
function addNum(x : number, y:number) {
    return x + y
}
console.log(addNum(1, 2))
function log(message: string | number): void {
    console.log(message)
}

//Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}
const user1: UserInterface ={
    id: 1,
    name: 'John'
}
//interface Point = number | string     Can't use unions with interface, but you can with type
type Point = number | string
const p1 : Point = 1
//user1.id = 5      can't reassign readOnly values

//Interfaces w/ Functions
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Interface for Class
interface PersonInterface {
    id: number
    name: string
    register(): string
}
//Classes
class Person implements PersonInterface{
    id: number
    name: string

//Private property - only accessible within the class
// Public - default, accessible anywhere
// Protected - only accessible within class & extensions
    constructor(id: number, name: string) {
        console.log(123)
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')

console.log(brad.register())

//Subclasses
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, 'Sean', 'CEO')
console.log(emp)
console.log(emp.register())

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad','joe','jill'])
//numArray.push('hello') - generics instead of 'any' means it can be any 1 type that is declared when initialized
strArray.push('Drew')
