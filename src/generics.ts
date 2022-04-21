// generics means it can accept different datatypes
const addID = <T extends object>(obj: T) => {       // after extending object we can't use 18th line of code. T work as a datatype
    const id = Math.random().toString(16);
    return { ...obj, id };
}

interface UserInterfac {
    name: string;
    age: number;
}

const test: UserInterfac = {
    name: 'John',
    age: 30
}

const result = addID<UserInterfac>(test);
// const result = addID(test);      // also ok
// const result = addID<string>("foo");      // also ok
console.log("result", result);





// generic type interface
interface IGeneric<T> {         // T is the data type
    name: string;
    value: T;
}

const generic: IGeneric<{meta: string}> = {
    name: 'foo',
    value: {
        meta: 'bar'
    }
}

const user2: IGeneric<string[]> = {
    name: 'foo',
    value: ['bar', 'baz']
}

// passing more datatype in generic type
interface IGeneric2<T, U> {
    name: string;
    value: T;
    value2: U;
}

const generic2: IGeneric2<string, number> = {
    name: 'foo',
    value: 'bar',
    value2: 10
}

// const updatedArray = append<string>('baz', ['foo', 'bar']);