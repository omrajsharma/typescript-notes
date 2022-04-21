var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// generics means it can accept different datatypes
var addID = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var test = {
    name: 'John',
    age: 30
};
var result = addID(test);
// const result = addID(test);      // also ok
// const result = addID<string>("foo");      // also ok
console.log("result", result);
var generic = {
    name: 'foo',
    value: {
        meta: 'bar'
    }
};
var user2 = {
    name: 'foo',
    value: ['bar', 'baz']
};
var generic2 = {
    name: 'foo',
    value: 'bar',
    value2: 10
};
// const updatedArray = append<string>('baz', ['foo', 'bar']);
