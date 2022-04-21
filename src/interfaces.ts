// const IUser: {
//     name: string;
//     surname: string;
//     age: Number;
//     getFullName: () => string;
// } = {
//     name: 'John',
//     surname: 'Doe',
//     age: 30,
//     getFullName: function () {
//         return this.name + " " + this.surname;
//     }
// }

// const IUser2 = {
//     name: 'John',
//     surname: 'Doe 2',
//     age: 30,
//     getFullName: function () {
//         return this.name + " " + this.surname;
//     }
// }

// IUser or UserInterface
interface IUser {
    name: string;
    surname: string;
    // by default entities are mendatory, by putting ? we can make it optional
    age?: Number;
    getMessage(): string;
}

const omraj: IUser = {
    name: 'Omraj',
    surname: 'Sharma',
    getMessage: function () {
        return this.name + " " + this.surname;
    }
}

// autocomplete in objects
console.log(omraj.getMessage());


// Union & Type alias in TS
let username: string = 'omraj';
let pageName: string | number = "1";    // union
let errorMessage: string | number = null;

interface UserInterface {
    name: string;
    surname: string;
}

let user: UserInterface | null = null;

let someProp: string | number | null | undefined | boolean | string[] | object;

// Type alias
type ID = string;
interface IEmployee {
    id: ID;     // type alias
    name: string;
    surname: string;
}

type PopularTag = string;
const popularTags: PopularTag[] = ['angular', 'react', 'vue'];

// union + type alias
type MaybePopularTag = PopularTag | null;

const dragonsTag: MaybePopularTag = "dragon";


// Data types in TS
const doSomething = ():void => {    // void
    console.log("doSomething");
    // return 1;    // error
}

let foo: void = undefined;
// foo = "foo";   // error

let bar: any = "foo";   // any
bar = 1;
bar = true;

const neverFunction = ():never => {   // never - it never happens
    throw new Error('error');
}

let vAny: any = 1;
let vUnknown: unknown = 1;  // unknown - it can be anything

let s1: string = vAny;
// let s2: string = vUnknown;   // error
let s2: string = vUnknown as string;
s1 = "helo";

console.log(vAny.foo());
// console.log(vUnknown.foo());     // error