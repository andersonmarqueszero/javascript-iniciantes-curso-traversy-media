/*
alert('Hello World');

-----------------------------------------------------------------------

console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');

-----------------------------------------------------------------------

// variables: var (outdated), let, const
// with "let" it's possible to change the variable, like displayed below

let age = 30;
age = 31;

console.log(age);

// with "const" it's not possible to change the variable, the code below displays an error

const age = 30;
age = 31;

console.log(age);

// the tip is to always use "const", unless you know you want to reassign the variable, for example

let score;

score = 10;

console.log(score);

// if you try to assign "const" in the example above, you will get an error, since you're required to input a value to your variable

-----------------------------------------------------------------------

// These are some examples of data types: String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// with the undefined variable, you can define the undefined, like it's displayed in y, or you can use "let" to achieve the same effect, like it's shown in z

console.log(typeof z);


------------------------------------------------------------------------

const name = 'John';
const age = 30;

// Concatenation
// The method below is considered old

console.log('My name is ' + name + ' and I am ' + age);

//Template String
// This is the "new" method

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

--------------------------------------------------------------------------



const s = 'Hello World!';

//The command below is a property, therefore, it DOESN'T need another set of parenthesis//
console.log(s.length);
//The command below is a method (a funcion associated with an object), therefore, it NEEDS another set of parenthesis//
console.log(s.toUpperCase());
//To extract a substring out of this string, you need two indexes, with an start and an end
console.log(s.substring(0,5));
//These can also be chained to each other, using a dot
console.log(s.substrain(0,5).toUpperCase());

--------------------------------------------------------------------------

//It is also possible to split a string into an array

const x = 'technology, computers, it, code';
console.log(x.split(', '));

--------------------------------------------------------------------------

// Arrays - variables that hold multiple values

//The following method isn't commonly used

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

// The following method is the one used the most

const fruits = ['apples', 'oranges', 'pears'];

//console.log(fruits);

//In JavaScript you can have multiple data types within the same array, like a number or a boolean

console.log(fruits[1])
//This command above will call for the item in the second place, which is 'oranges'

//REMINDER: Arrays are 'zero based', meaning that the first item is always zero.

//To add another item in the array, you can use

fruits[3] = 'grapes';

console.log(fruits);

//The two commands above will add 'grapes' to the fourth position in the array.

//BE AWARE: The method above isn't the best way to add a variable to the array, since you may not know how many items the array has

//To add an item to the end of the array, you can use ".push", regardless of quantity

fruits.push('mangos');

console.log(fruits);

//To add an item to the beginning of the array, you can use ".unshift"

fruits.unshift('strawberries');

console.log(fruits);

//To remove the last item of the array, you can use ".pop"

fruits.pop();

console.log(fruits);

//If you wanna check to see if something is in the array, you can use "Array.isArray" within the console.log

console.log(Array.isArray(fruits));

//The method described above can check for a string within the aray as well, all you have to do is change "fruit" for any string

//To get the index (position) of a certain value, you can use "".indexOf"

console.log(fruits.indexOf('oranges'));

--------------------------------------------------------------------------

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);

//With the command above, you will get all the values.
//To get a single value, all you have to do is a "dot sintax"

console.log(person.firstName, person.lastName);

//To get a string inside an array, you should do

console.log(person.hobbies[1]);

//To get a string inside an object, you should do

console.log(person.address.city);

//A method called "de-structuring" happens when you create a variable from the element you already created, for example

const { firstName, lastName } = person;

//You should notice that by doing this, you're not assigning new values, but pulling them out of your initial variables. To check this, you can do

console.log(firstName);

//The same can be done for an embedded object

const { firstName, lastName, address: {city}} = person;

console.log(city);

//The structure described above is advanced, so it isn't recommended for beginners

//You can also add new properties by doing

person.email = 'john@gmail.com';

console.log(person);

--------------------------------------------------------------------------

//Arrays of Objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);

//If you want to grab one of the objects within the array, you should .log the following:

console.log(todos[1].text);

//By doing that, you should grab the string 'Meeting with boss' from the text object within the array

//JSON

 //If you wanna convert the previous array into a JSON format, you should do the following

const todos = [
    {
       "id": 1,
       "text": "Take out trash",
       "isCompleted": true
    },
    {
       "id": 2,
       "text": "Meet with boss",
       "isCompleted": true
    },
    {
       "id": 3,
       "text": "Dentist appt",
       "isCompleted": false
    }
 ];

//Notice that the JSON is defined by "", then separated by , and defined within the same [] and {}, like an array

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

--------------------------------------------------------------------------

//For loop

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);    
}

--------------------------------------------------------------------------

//While loop

let i = 0;
while(i < 10) {
    console.log(`While Loop Number ${i}`);
    i++;
}

--------------------------------------------------------------------------

//Looping through arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//Looping the array using a for, of loop

for(let todo of todos) {
    console.log(todo.text);
}

--------------------------------------------------------------------------

//High order array methods

//forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

--------------------------------------------------------------------------

//Conditionals

const x = 4;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} 
else {
    console.log('x is less than 10');
}

const x = 4;
const y = 11;

//The || represents "or"

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

//The && represents "either"

if (x > 5 && y > 10) {
    console.log ('x is more than 5 and y is more than 10');
}

--------------------------------------------------------------------------

//Turnary Operator

const x = 11;

//The ? represents "then" and : represents "else"

const color = x > 10 ? 'red' : 'blue';

console.log(color);

//You can also apply "Switches"

const x = 9;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red of blue');
}

--------------------------------------------------------------------------
*/
// Functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));

//To turn the funcion above into an "arrow function", you should:

const addNums = (num = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNums(5,5));