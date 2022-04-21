var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// by default everything is public
// access modifiers are public, private, protected
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName + " " + lastName;
    }
    // error TS2540: Cannot assign to 'unchangeableName' because it is a constant or a read-only property.
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "";
    // }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    // static
    User.maxAge = 100;
    return User;
}());
var Omraj = new User("John", "Doe");
console.log(Omraj.getFullName());
// console.log(Omraj.firstName);   // error
console.log(Omraj.unchangeableName);
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // error 
    // getfullName(): void {
    //     return this.firstName + " " + this.lastName;
    // }
    Person.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var GoodPerson = /** @class */ (function (_super) {
    __extends(GoodPerson, _super);
    function GoodPerson(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    GoodPerson.prototype.getFullname = function () {
        return _super.prototype.getFullname.call(this);
    };
    GoodPerson.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    GoodPerson.prototype.getEditor = function () {
        return this.editor;
    };
    return GoodPerson;
}(Person));
var Shyamraj = new GoodPerson("John", "Doe");
console.log(Shyamraj.getFullname());
