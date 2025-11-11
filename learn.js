// console.log("Hello good morning.");
// * Variables -> VAR LET CONST

// * Old way of declaring variables (before ES6).
// var y = "Tauzee";
// console.log(y);
// var y = "John";
// console.log(y)
// console.log(y)


// False
// console.log(g); //
// g  = 'undefined'
// var g = "ayo";

// LET
// * Introduced in ES6 (2015) to fix issues with var.

// let age = 25;

// ⚠️ Major Issues with var.


// if (true) {
//     var x = 10;
// }
// console.log(x);


// if (true) {
//     let x = 10;
// }
// console.log(x);


// console.log(b);
// let b = 5;


// * let is used to  declare variables that can be reassigned but cannot be redeclared in the same scope.

// let age = 25;
// age = 26;
// console.log(age);
// let age = 30; ❌

// Block Scope.

// if (true) {
//     let message = "Hello";
//     console.log(message); // ✅ works.
// }
// console.log(message);  // ❌ ReferenceError.


/*
* -> const — Variables That Stay Constant
🧠 Definition:

const is used to declare block-scoped variables that cannot be reassigned or redeclared.
Once a const variable is assigned, its reference cannot change.
*/

// const pi = 3.14159;
// pi = 13;
// console.log(pi);

// const president = "ABAT";
// president = "Ahmad";

// let tropical;

// tropical = "Vanilla";
// console.log(tropical)
// tropical = "Tea";
// console.log(tropical);
// tropical = "Bread";
// console.log(tropical);

// ! You must assign a value when declaring a const variable.
// const y;

// const user = { name: "Ahmahd", age: 28 };
// ✅  you can modify properties.
// console.log(user);
// user.age = 26;
// user.name = "Tauzee";
// console.log(user);


// ❌ You cannot reassign the object itself
// user = { name: "john" };
// console.log(user);



/*
       * -> 🧠 What Are Data Types?

Data types define the kind of value a variable can hold — like numbers, text, or objects.


*/

// * JAVASCRIPT DATA TYPES OVERVIEW
// ? Javascript has two major categories of data types:

/*
* -> Primitive (String, Number, Boolean, Undefined, Null, BigInt, Symbol) ❌ Immutable.
* -> Object  (Object, Array, function, Date) etc. ✅ Mutable.
*/

// * 1 Primitive Data Types
// Primitive types ae the most basic building blocks.
// They hold single values (not collections) and are immutable -- meaning you can't change them directly.


// * ** STRING
// Used for text
// let name = "Ibraheem yusuf";
// console.log(name[4]);
// name[4] = "Q";
// console.log(name);
// let message = 'Hello';
// let phrase = My name is ${name}; // Template literal.

// ✅ Strings are immutable — you can’t change characters directly:

// let str = "Hi";
// str


// Number

//represent all numeric values (integers, decimals etc.)

// let age = 25;
// console.log(age)
// let price = 99.99;
// console.log(price)

// javascript doesn't have separate types for integers and floats - just number.

/*
Boolean
Represent true or false
*/
// let isOnline = true;
// console.log(isOnline)
// let isAdmin = false;
// console.log(isAdmin)

/*
            * -> Object (reference) data types

 * -> Obkects are collections of key-value pairs or complex sructures
 * ->They are mutBle and stored by refernce, not by value.
*/

// * Object

// const user = {
    // name: "Ahmahd",
    // age:28,
    // isPresident:true
// }     


// console.log(user.name, user.age, user.isPresident) // to dispaly them one by one
// console.log(user) // to display all at once

// * Array
// An ordered collection (list)of value

// const fruits = ["Apple", "Banana", "Orange", 90, true]
// console.log(fruits[2]) // to call one 

//!   De-structuring
// console.log(fruits.slice(-2));
// const [, e, , y, t] = fruits;
// console.log(e, y)


// * ***** STRING PROPERTIES

// Lenght
// Returns the number of characters in string.

// let text = "Hello world";
// console.log(text.length);

// let greet = "Hello world";
// console.log(greet.lenght);

// ** String Methods
// * Accessing Characters
// Retuns the character at a specified index'

// let prLanguage = "Javascript";
// console.log(prLanguage.charAt(0));
// console.log(prLanguage.charAt(4));

// *** Extracting Part
// slice(start, end)
// Extracts a section of a string (end not included).

// let sentence = "How are you doing?";
// console.log(sentence.slice(0, 5));
// console.log(sentence.slice(5));



// let text = 'Hello World, Welcome to the World';
// console.log(text.indexOf("World"));


/*
    * -> Extracting parts
slice(starts, end)
Extracts a section of a string (end not included). 
*/ 


// Managing featured products images
// const productImages = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg',];

// show only first 3 images in main gallery, rest in thumbnail view.

// const mainGalleryImages = productImages.slice(0, 3);
// console.log(mainGalleryImages);
// const thumbnailImages = productImages.slice(3);
// console.log(thumbnailImages);



// *** API DEVELOPMENT - Request processing

// * Processing File Uploads
// Extracting file extension from uploaded file.
// const uploadedFile = 'quarterly-report.pdf';
// const fileExtension = uploadedFile.slice(uploadedFile.lastIndexOf('.') +1);
// console.log(fileExtension);


// ** Email & Notification Systems
// Email Domain Extraction

// const email = "femi@company.com";
// const domain = email.slice(email.indexOf('@') +1);
// console.log(domain)

// console.log(domain);

// const username = email.slice(0, email.indexOf('@'));
// console.log(username);

/*
* -> substring(start, end)
Similar to slice, but doesn't accept negative indexes.
*/

// const creditCard = "4111111111111111";
// const maskedCard = creditCard.substring(0, 4) + "********" + creditCard.substring(12);
// console.log(maskedCard);

// ** URL Slug Generation
// const blogTitle = "How to Build Scalable Backend System in 2025";

// console.log(blogTitle.length); 

// const slug = blogTitle.substring(0, 45).toLowerCase().replace(/ /g, "-");
// console.log(slug);

// ***** Array -> JAVASCRIPT
// ? What is an Array? 
/*
An array is a data type structure that store multiple values in a single values variable. Arrays can hold any type of data: numbers, strings, objects, even other arrays.
*/

// * Creating arrays

// const fruits = ['apple', 'banana', 'orange'];
// const numbers = [1, 2, 3, 4, 5];
// const mixed = [1, 'hello', true, null, {name: 'john'}];
// const empty = [];

// Array properties
// Lenght
// Returns the number of elements in an array.


// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

// * -> Array Methods
// Adding/Removing Elements (.push method)

// const animals = ['cat', 'dog'];
// animals.push('bird');

// Add multiple elements
// animals.push('fish', 'hamster');
// console.log(animals);
// File Upload Tracking
// ? Tracking uploaded files
// const uploadedFiles = [
    // {filename: 'document.pdf', size: '2.5MB'},
    // {filename: 'image.jpg', size: '1.8MB'}
// ];

// const newFile = {filename: 'Video.mp4', size: '15.2MB'};
// uploadedFiles.push(newFile);
// console.log(uploadedFiles);

// pop()- Removes the Last element.

// const fruits = ['apple', 'banana', 'orange'];
// const removed = fruits.pop();
// console.log(removed);
// console.log(fruits);

// unshift - Adds elements to the beginning.
// const numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);
// numbers.unshift(-1, 0);
// console.log(numbers);

// shift() - Removes the first element. 
// const colors = ['red', 'green', 'blue'];
// const removed = colors.shift();
// console.log(colors);

// ** searching Elements
// indexOf() - Find the index of an element
// ! User Authentication Check
// Checking if User is in blocked list
// const blockedUsers = ['user123', 'spammer456', 'bot789'];
// const loginAttempt = 'User123';
// const isBlocked = blockedUsers.indexOf(loginAttempt);
// console.log(isBlocked);

// includes() - Checks if an element exists.
// const pets = ['cat', 'dog', 'bird'];
// console.log(pets.includes('dog'));


// find() - Returns the first element that matches a condition.
// const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find(y => y > 10);
// console.log(found);

// includes() - Checks if an element exists.
// const pets = ['cats', 'dog', 'bird'];
// console.log(pets.includes('dog'));
// const found = pets.find(num => num === 'dog');
// console.log(found);

// find() - Return the first elements that matches a condition.
// const numbers = [5, 12, 8, 130, 44];

const users = [
    [101, "john@mail.com", 'active'],
    [102, "john@mail.com", 'inactive'],
    [103, "mike@mail.com", 'active'],
];

// const foundUser = users.find(user => user[0] === 102);
// console.log(foundUser);

// .filter() Finds all matches A new array of all matching elements
const foundUser = users.filter(user => user[2] === 'active');
console.log(foundUser);

/* 
   Transporting Arrays
   map() - Creates a new array by transforming each element
*/

const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
const names = ['Thakzin', 'Ibnu', 'Tauzee', 'Ashiwaju', 'Ahmeedi'];
const uppercase = names.map(name => name.toUpperCase());
console.log(uppercase);
// console.log(doubled);


// * slice() - Extracts a portion of an array (doesn't modify original)

// ** Server Load Distribution
const servers = [
    ['web01', 'primary', '80%'],
    ['web02', 'primary', '75%'],
    ['web03', 'secondary', '60%'],
    ['web04', 'secondary', '55%'],
    ['web05', 'backup', '10%'],
];
const secondaryServers = servers.slice(2, 4);
console.log(secondaryServers);
































