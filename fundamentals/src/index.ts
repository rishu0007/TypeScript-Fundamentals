// variables
let sales: number = 123_456_789;
// as we have initialized the above variable sales with a number so aftr removing the annotation, we can still make sure tha the 
// variable will accept only numbers.
let course: string = 'TypeScript'; // similarly after removing the annotation, the decleration will be => let course = 'TypeScript'
let is_published = true; // same as => let is_published: boolean = true

let level; // the typescript compiler will assume that the type of this variable is "any"

function render(document: any) { // if we don't annotate the parameter with type any then the compiler will implecetly make its type "any"
    console.log(document);
}

// arrays

let numbers: number[] = [1,2,3]; 
// or
let newNumbers = [1,2,3];

let number1 = [] // by default the type of this empty array will by "any"

// to make it a number array, we will do like this :

let numbers2: number[] = [];


/* ********* Tuple ******************* */

// Tuple is a fixed length array in which each element have a particular type

// 1, 'Rishu'

let user : [number,string] = [1,"Rishu"];

console.log(user[1].charAt(1));

// tuples are useful when we have only two values

/* *************** Enum ********************* */

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase

const enum Size {Small = 1, Medium, Large};
// if we define our enum with const keyword then the compiler will generate more optimised code
// if we set the value of small as 1, then the values of medium and large will we assigned with 2 and 3 respectively

let mySize: Size = Size.Medium;
console.log(mySize);


/* ****************** Functions ******************* */

function calculateTax(income: number, taxYear?: number) : number {  // after adding quesionmark in second parameter, then the 2nd parameter is optional
    if((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000); // we are not passing taxYear as arguement thus the default value of taxYear will be taken as 2022


// above same thing can be done in another way

function calculateTax1(income: number, taxYear = 2022) : number {
    if(taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

calculateTax1(10_000);
calculateTax1(10_000,2023); // second arguement will overwrite the default value


/* **************** Objects  ************************************ */

let employee: {
    id: number,
    name: string
} = {id: 1, name: ''};

employee.id = 0;

// now making id of employee read only so that no one can change it

let employee2: {
    readonly id: number,
    name: string
} = {id: 1, name: "Rishu"};

// employee2.id = 0; now we can't change the id of the employee
console.log(employee2.id);

let employee3: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void // retire is a function with parameter date of type Date that returns nothing so void
} = {
    id: 1,
    name: "Rishu",
    retire: (date: Date) => {
        console.log(date);
    }
}


/* ****************************  Advanced Types *********************************** */

// To learn
// => Types aliases
// => Unions and Intersections 
// => Type narrowing 
// => Nullable types
// => The unknown type
// => The never type 



// Type Alias

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employee4: Employee = {
    id: 1,
    name: 'Rishu',
    retire: (date: Date) => {
        console.log(date);
    }
}



// union types 

// -> with union types we can give variables and function parameters more than one type 

function kgToLbs(weight: number | string): number {
    // narrowing
    if(typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');




// Intersection Types

// -> It is another technique of combining types 

// let weight: number & string; 

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable; // intersection type

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



// Literal Types : sometimes we want to limit values we can assign to our variables so we use literal types

// let define a variable which can take value either 100 or 50

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity:  Quantity = 50;

// above 2 lines can also be written as let quantity: 50 | 100 = 100;

type Metric = 'cm' | 'inch';



// Nullable Types 

function greet(name: string | null | undefined): void {
    if(name)
        console.log(name.toUpperCase());
    else 
        console.log('Hello');
}

// greet(null); // we can't call this function on null or undefined values before annotating it with null
// bydefault, typescript is very strict about null values



// Optional chaining

type Customer = {
    birthday?: Date // making birthday property optional
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date() };
}

let Customer = getCustomer(0);

// optional property access operator
console.log(Customer?.birthday?.getFullYear());


// Optional element access operator : Useful when we are dealing with arrays

// customers?.[0]

// Optional call
let log: any = null;
log?.('a');
