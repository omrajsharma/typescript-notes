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
var omraj = {
    name: 'Omraj',
    surname: 'Sharma',
    getMessage: function () {
        return this.name + " " + this.surname;
    }
};
// autocomplete in objects
console.log(omraj.getMessage());
// Union & Type alias in TS
var username = 'omraj';
var pageName = "1"; // union
var errorMessage = null;
var user = null;
var someProp;
var popularTags = ['angular', 'react', 'vue'];
var dragonsTag = "dragon";
// Data types in TS
var doSomething = function () {
    console.log("doSomething");
    // return 1;    // error
};
var foo = undefined;
// foo = "foo";   // error
var bar = "foo"; // any
bar = 1;
bar = true;
var neverFunction = function () {
    throw new Error('error');
};
var vAny = 1;
var vUnknown = 1; // unknown - it can be anything
var s1 = vAny;
// let s2: string = vUnknown;   // error
var s2 = vUnknown;
s1 = "helo";
console.log(vAny.foo());
// console.log(vUnknown.foo());     // error
