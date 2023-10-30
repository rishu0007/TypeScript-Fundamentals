"use strict";
var _a;
// variables
let sales = 123456789;
// as we have initialized the above variable sales with a number so aftr removing the annotation, we can still make sure tha the 
// variable will accept only numbers.
let course = 'TypeScript'; // similarly after removing the annotation, the decleration will be => let course = 'TypeScript'
let is_published = true; // same as => let is_published: boolean = true
let level; // the typescript compiler will assume that the type of this variable is "any"
function render(document) {
    console.log(document);
}
// arrays
let numbers = [1, 2, 3];
// or
let newNumbers = [1, 2, 3];
let number1 = []; // by default the type of this empty array will by "any"
// to make it a number array, we will do like this :
let numbers2 = [];
/* ********* Tuple ******************* */
// Tuple is a fixed length array in which each element have a particular type
// 1, 'Rishu'
let user = [1, "Rishu"];
console.log(user[1].charAt(1));
;
// if we define our enum with const keyword then the compiler will generate more optimised code
// if we set the value of small as 1, then the values of medium and large will we assigned with 2 and 3 respectively
let mySize = 2 /* Size.Medium */;
console.log(mySize);
/* ****************** Functions ******************* */
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000); // we are not passing taxYear as arguement thus the default value of taxYear will be taken as 2022
// above same thing can be done in another way
function calculateTax1(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax1(10000);
calculateTax1(10000, 2023); // second arguement will overwrite the default value
/* **************** Objects  ************************************ */
let employee = { id: 1, name: '' };
employee.id = 0;
// now making id of employee read only so that no one can change it
let employee2 = { id: 1, name: "Rishu" };
// employee2.id = 0; now we can't change the id of the employee
console.log(employee2.id);
let employee3 = {
    id: 1,
    name: "Rishu",
    retire: (date) => {
        console.log(date);
    }
};
let employee4 = {
    id: 1,
    name: 'Rishu',
    retire: (date) => {
        console.log(date);
    }
};
// union types 
// -> with union types we can give variables and function parameters more than one type 
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
// Nullable Types 
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let Customer = getCustomer(0);
// optional property access operator
console.log((_a = Customer === null || Customer === void 0 ? void 0 : Customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator : Useful when we are dealing with arrays
// customers?.[0]
// Optional call
let log = null;
log === null || log === void 0 ? void 0 : log('a');
