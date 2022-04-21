// ###### Variable ######

const hello = "Hello World";
console.log(hello);
// Invalid
// hello = "Hello TypeScript";

let nameMe = "John";
console.log(nameMe);
nameMe = "Omraj Sharma";
console.log(nameMe);
// Invalid
// nameMe = true;

let car:string = "wagonR";
car = "ertiga";
// invalid
// car = 123;

// ###### Functions ######
const getFullName = (name: string, surname: string) => {
    return name + " " + surname;
}
console.log(getFullName("John", "Doe"));