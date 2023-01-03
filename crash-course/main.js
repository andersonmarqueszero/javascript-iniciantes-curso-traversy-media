/*
alert('Hello World');

-----------------------------------------------------------------------

console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');

-----------------------------------------------------------------------

// variables: var (outdated), let, const //
// with "let" it's possible to change the variable, like displayed below //

let age = 30;
age = 31;

console.log(age);

// with "const" it's not possible to change the variable, the code below displays an error//

const age = 30;
age = 31;

console.log(age);

// the tip is to always use "const", unless you know you want to reassign the variable, for example //

let score;

score = 10;

console.log(score);

// if you try to assign "const" in the example above, you will get an error, since you're required to input a value to your variable //

-----------------------------------------------------------------------

// These are some examples of data types: String, Numbers, Boolean, null, undefined, Symbol //

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// with the undefined variable, you can define the undefined, like it's displayed in y, or you can use "let" to achieve the same effect, like it's shown in z //

console.log(typeof z);


------------------------------------------------------------------------

const name = 'John';
const age = 30;

// Concatenation //
// The method below is considered old //

console.log('My name is ' + name + ' and I am ' + age);

//Template String//
// This is the "new" method //

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

--------------------------------------------------------------------------



const s = 'Hello World!';

//The command below is a property, therefore, it DOESN'T need another set of parenthesis//
console.log(s.length);
//The command below is a method (a funcion associated with an object), therefore, it NEEDS another set of parenthesis//
console.log(s.toUpperCase());
//To extract a substring out of this string, you need two indexes, with an start and an end//
console.log(s.substring(0,5));
//These can also be chained to each other, using a dot//
console.log(s.substrain(0,5).toUpperCase());

--------------------------------------------------------------------------

//It is also possible to split a string into an array//

const x = 'technology, computers, it, code';
console.log(x.split(', '));
*/