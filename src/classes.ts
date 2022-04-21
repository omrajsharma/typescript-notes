// by default everything is public
// access modifiers are public, private, protected
class User {
    private firstName: string;
    private lastName: string;
    // readonly
    readonly unchangeableName: string;
    // static
    static readonly maxAge: number = 100;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName + " " + lastName;
    }

    // error TS2540: Cannot assign to 'unchangeableName' because it is a constant or a read-only property.
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "";
    // }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

const Omraj = new User("John", "Doe");
console.log(Omraj.getFullName());
// console.log(Omraj.firstName);   // error
console.log(Omraj.unchangeableName);


interface userInterface {
    getFullname(): string;
}

class Person implements userInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // error 
    // getfullName(): void {
    //     return this.firstName + " " + this.lastName;
    // }

    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }
}

class GoodPerson extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    getFullname(): string {
        return super.getFullname();
    }

    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const Shyamraj = new GoodPerson("John", "Doe");
console.log(Shyamraj.getFullname());