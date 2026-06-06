# What we learned so far:

## Data Types

### Primitives
```javascript
number
string
boolean
undefined
null
```

```javascript
// numbers
1 2 3 5.5 300 0 -1 -20

// strings
"hello" 'world' `javascript`

// booleans
true false

// undefined
undefined

// null
null
```

### Objects
```javascript
object
array
function
```

```javascript
// object
const obj = { name: "John", age: 30 };

// array
const arr = [1, 2, 3];

// function
const func = () => {
  console.log("Hello");
};

// object literals
const person = {
  name: "Alice", // property
  age: 25,
  greet: () => { // property with a function is called a method
    console.log("Hello");
  }
};

// array literals
const numbers = [1, 2, 3];
const fruits = ["apple", "banana", "orange"];

// array of objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// function literals
const multiply = (a, b) => {
  return a * b;
};

// function call
const result = multiply(2, 3);
console.log(result); // 6

```

## Objects

Objects are used to describe real-world entities or concepts. They consist of *properties*.

Each property has a *key* (or name) and a *value*. The key is a string, and the value can be any data type.


```
"name": "value"
```

> In JavaScript, property *keys* are strings, but you don't need to wrap them in quotes if they are valid identifiers:


```
name: "value"
```

An object is a bunch of properties, enclosed in curly braces `{}`, separated by commas:

```javascript
const beer = {
  id: "korca",
  name: "Korca",
  price: 300 // Leke
};
```

Objects can be nested:

```javascript
const user = {
  id: "123",
  name: "Alice",
  age: 25,
  address: {
    street: "Main St",
    city: "Anytown",
    country: "USA"
  }
};
```

Objects can be used to represent complex data structures:

```javascript
const user = {
  id: "123",
  name: "Alice",
  age: 25,
  address: {
    street: "Main St",
    city: "Anytown",
    country: "USA"
  },
  orders: [
    { id: "456", product: "iPhone", price: 999 },
    { id: "789", product: "MacBook", price: 1999 }
  ]
};
```

To access properties of an object, you can use dot notation or bracket notation (bracket notation allows you to save a property name as a variable, and use it to access the property):

```javascript
console.log(user.name); // Alice
console.log(user["age"]); // 25
console.log(user.address.city); // Anytown
console.log(user["orders"][0].product); // iPhone
console.log(user.orders[1].price); // 1999

const property = "name";
console.log(user[property]); // Alice
```

## Arrays

Arrays are the "lists", which can contain any data type (preferably the same type for all the elements). They are created using square brackets `[]`, with elements separated by commas:

```javascript
const numbers = [1, 2, 3];
const fruits = ["apple", "banana", "orange"];

// array of objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
```

Accessing array elements: 

To access array element, we use square brackets, and specify the element index starting from 0:

```javascript
const alice = people[0]
```

And now "alice" contains `{ name: "Alice", age: 25 }`

## Functions

Functions are reusable blocks of logic or behavior.
They are created with a following syntax:

```javascript
const name = (parameter1, parameter2) => {
  // function body
}
```

```javascript
const greet = (name) => {
  console.log("Hello, " + name);
}

greet("Alice"); // Hello, Alice!
```

Functions can `return` a value:

```javascript
const add = (a, b) => {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

## Assignment operator `=`

The assignment operator `=` is used to assign a value to a variable:

```javascript
const x = 5;
const y = "hello";
const z = true;

const obj = {
  id: 123,
  name: "Alice",
  age: 25
};

const sum = 1 + 2;
```

Or to assign a value to a property of an object:

```javascript
obj.age = 26;
console.log(obj.age); // 26
```

Essentially, it looks like this:

```
LHS = RHS
```

Where "LHS" is "left hand side", and "RHS" is "right hand side". When code executes, first the RHS will be evaluated, and the result will be assigned to LHS.

## Insights

`console` is an object, which has a `log` method that can be used to print messages to the console:

```javascript
console.log("Hello, world!");
```

We can create a similar object ourselves:

```javascript
// Define a log function
const log = (message) => {
  console.log(message);
};

// Create an object with a log method
const myConsole = {
  "log": log
};

myConsole.log("Hello, world!"); // Hello, world!
```

## Functions

10 Jan 2026

So, today we learned much more about functions.

Function is one more type of data in JavaScript. It can be assigned to a variable, passed as an argument to another function, or returned from a function.

```javascript
const add = (a, b) => {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

We define a function using the function declaration or fat arrow syntax. 

Function declaration:

```javascript
function addTwoNumbers(a, b) {
  return a + b;
}
```

Arrow syntax:

On the left side of the arrow, we specify inputs to the function:

```javascript
(a, b) =>
```

Meaning, that our function will take two inputs (called "arguments").

On the right side of the arrow, we specify the "body" of the function — basically, what our function will do:

```javascript
=> {
  return a + b;
}
```

And, of course, to use it, we need to assign it to a variable:

```javascript
const addTwoNumbers = (a, b) => {
  return a + b;
}
```

Now, addTwoNumbers contains our function. Remember, this is just a named behavior — it does not do anything until we "call" it.

To call a function, we need to use the variable name that contains our function, and pass the inputs to it in parentheses "()":

```javascript
const result = addTwoNumbers(2, 3);
console.log(result); // 5
```

And check this out:

```javascript
const justFunction = addTwoNumbers; // Here we don't call the function, we just put it in a variable "justFunction"

const result = addTwoNumbers(2, 3); // And here we call the function using the variable name
const result2 = justFunction(2, 3); // And here we call the function using another variable name
```

Since we can put functions in variables, we also can pass functions as arguments to other functions:

```javascript
const logResult = (func, a, b) => {
  const result = func(a, b);
  console.log(result);
}

logResult(addTwoNumbers, 2, 3); // 5
```

## Additional helpful methods

### Array methods

#### `.forEach`
`.forEach` allows us to execute some function for each element in the array:

```javascript
const array = [0, 1, 2, 3]

array.forEach( (item) => {
  console.log(item); // Prints 0, 1, 2, 3
} );
```

Or, with already declared function:

```javascript
const array = [0, 1, 2, 3]

function print(num) {
  console.log(num);
}

array.forEach(print); // Prints 0, 1, 2, 3
```

#### `.filter`

`.filter` allows us to create a new array based on another array and a _predicate_ function that returns boolean.

```javascript
const array = [0, 1, 2, 3];

const newArray = array.filter((item) => {
  return item > 1;
});

console.log(newArray); // prints 2, 3
```


#### `.map`

`.map` allows us to create a new array from another array and a function that describes how to change each element.

```javascript
const array = [0, 1, 2, 3];

const newArray = array.map((item) => {
  return item + 10;
});

console.log(newArray); // prints 10, 11, 12, 13
```

#### `.find`

`.find` allows us to find a value in the array using a _predicate_ function that returns boolean. It returns a first found value. If the value was not found, it returns `undefined`.

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const alice = array.find((item) => {
  return item.name === "Alice";
});

console.log(alice.age); // prints 25

const billy = array.find((item) => {
  return item.name === "Billy";
});

console.log(billy); // prints undefined
console.log(alice.age); // throws an error, because undefined does not have the "age" property

```

Since it returns undefined, usually we always check that we actually found the value:


```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const alice = array.find((item) => {
  return item.name === "Alice";
});

if (alice !== undefined) {
  // And here we guarantee that we have a value in "alice" variable
  console.log(alice.age);
}

```

### DOM (Document Object Model) methods

#### `document.getElementById`

`document.getElementById` is used to get a reference to HTML element that has a specified id. Returns `undefined` if there is no such element.

```javascript
const app = document.getElementById("app");
```
