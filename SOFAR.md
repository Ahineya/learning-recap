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

Accessing array elements: next lesson ;)

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
