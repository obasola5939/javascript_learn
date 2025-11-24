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
An array is a data type structure that store multiple values in a single values variable. Arrays can hold any type of data: numbers, strings,  objects, even other arrays.
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

// const users = [
//     [101, "john@mail.com", 'active'],
//     [102, "john@mail.com", 'inactive'],
//     [103, "mike@mail.com", 'active'],
// ];

// const foundUser = users.find(user => user[0] === 102);
// console.log(foundUser);

// .filter() Finds all matches A new array of all matching elements
// const foundUser = users.filter(user => user[2] === 'active');
// console.log(foundUser);

/* 
   Transporting Arrays
   map() - Creates a new array by transforming each element
*/

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// const names = ['Thakzin', 'Ibnu', 'Tauzee', 'Ashiwaju', 'Ahmeedi'];
// const uppercase = names.map(name => name.toUpperCase());
// console.log(uppercase);
// console.log(doubled);


// * slice() - Extracts a portion of an array (doesn't modify original)

// ** Server Load Distribution
// const servers = [
//     ['web01', 'primary', '80%'],
//     ['web02', 'primary', '75%'],
//     ['web03', 'secondary', '60%'],
//     ['web04', 'secondary', '55%'],
//     ['web05', 'backup', '10%'],
// ];
// const secondaryServers = servers.slice(2, 4);
// console.log(secondaryServers);

// ** -> splice() - Adds/removes elements (modifies original)

/*
    The `splice()` method changes the contents of an array by:

    * -> removing
    * -> replacing, or
    * * -> elements at specific positions.
    
    It modifies the original array (unlink slice() which returns a new one).

*/

// 🛒 Removing an item from a shopping cart.

// let cart = ['Shirt', 'Trousers', 'Shoes', 'Watch'];
// cart.splice(0, 2);
// console.log(cart);

// Adding a new item to the middle of a list.

// const playlist = ['Song A', 'Song B', 'Song D'];
// playlist.splice(2, 0, 'Song C');  // add something and delete none
// playlist.splice(2, 1, 'Song C');    // add song c in the index2 and delete song d
// console.log(playlist);

// 📃 Managing a To-Do List
// let tasks = ['Wake up', 'Brush', 'Exercise', 'Breakfast'];
// tasks.splice(1, 1, 'Shower');
// console.log(tasks);   // replacing one element on the list with the other using .splice


// **** JAVASCRIPT OBJECT

// An object is data structure that stores information in key values pairs.
// Each key (also called a property) is like a label, and the value is the data stored under that label.

// let person = {
//     name: "Femi",
//     age: 25,
//     course: "Computer Science",
//     job: "Backend Engineer",
//     tel: "08163207400",
//     "first name": "Olusola"
// };
// console.log(person);

// Accesing objects values 
// There are two main ways to access an object's value.
// * Dot notation
// console.log(person.name);

// * Bracket notation
// console.log(person['job']);
// console.log(person["first name"]);

// Adding and Updating Properties
// You can add new properties or update existing ones easily.

// person.country = "Nigeria";
// person.age = 26;
// console.log(person);

// Deleting properties
// delete person.course;
// console.log(person);

// ** Nested Objects

// let user = {
//     name: "Olusola Obafemi",
//     address: {
//         city: "Ado-Ekiti",
//         zip: 360101
//     },
//     hobbies: ["Coding", "Reading"]
// };
// console.log(user.address.city);  // to select Ado-Ekiti
// console.log(user.hobbies[1])
// console.log(user.hobbies.indexOf("Reading"));
// user.pet = "Dog";
// console.log(user);
// user.hobbies.splice(0,0, "Cooking");  // adding element into the nested object
// console.log(user);

/* 
   *** -> LOOP
   A loop lets you repeat a block code multiple times - automatically.
      `Types of loops in Javascript`
      Loop types (for, while, do...while, for...of, for...in)

      `for` -> When you know how many times to repeat.
      `while` -> when you don't know the exact count, but have a condition
      `do...while` -> similar to `while` but runs at least once
      `for...of` -> To loop through arrays or strings
      `for...in` -> To loop through object properties
*/

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// };

// const dirtyDishes = ["plate", "bowl", "cup", "fork", "spoon"];
// for(let i = 0; i < dirtyDishes.length; i++){
//     console.log(`washing: ${dirtyDishes[i]}`);
//     console.log(`${dirtyDishes[i]} is now clean!`);
// };

// const dirtyDishes = ["plate", "bowl", "cup", "fork", "spoon"];

// for(let i = 0; i < dirtyDishes.length; i++){
//     console.log(`washing: ${dirtyDishes[i]}`);
//     console.log(`${dirtyDishes[i]} is now clean`);
    
//}


// const dirtyDishes = ["plate", "bowl", "cup", "fork", "spoon"];

// for(let i = 0; i < dirtyDishes.length; i++){
//     console.log(`washing ${dirtyDishes[i]}`);
//     console.log(`${dirtyDishes[i]} is now clean`);
    
// };

//  
// * Grocery Shopping (Working with lists)
// Checking items off your Shopping list
// const shoppingList = ["milk", "eggs", "bread", "cheese"];
// const cart = [];

// for( let i = 0; i < shoppingList.length; i++){
//     console.log(`✔️  Added ${shoppingList[i]} to cart`);
//     cart.push(shoppingList[i]);
// };
// console.log("cart contains:", cart);


// ** While Loop
// Runs as long as the condition is true.
// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// ** Charging Your Phone
// Monitoring battery level charging.

// let batteryLevel = 15; // Starting with low battery
// const chargingRate = 8; // % per iteration.

// console.log("📱 phone charging started...");
// while(batteryLevel < 100){
//     batteryLevel += chargingRate;

//     if(batteryLevel > 100) batteryLevel = 100;
//     console.log(`Battery ${batteryLevel}%`);

//     if(batteryLevel >= 80){
//         console.log(" ⚡ Almost full! Fast charging slowing down...");
//     }
// }
// console.log(batteryLevel);

// console.log(" 🔋Battery fully charged!");


// *** do...while loop
//  Runs at least once, then, checks the condition.
// the do...while loop is special because it guarantees the code runs at least once, then continues as long the condition remains true.
// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while(i < 5);

// *** password length checker
// let passwords = ["123", "pass", "mysecurePass", "abc"];
// let index = 0;
// let validPassword = "";

// do{
//     let currentPassword = passwords[index];
//     console.log(`Checking password ${currentPassword}`);

//     if(currentPassword.length >= 8){
//         validPassword = currentPassword;
//         console.log(`valid password found ${validPassword}`);
//     }else{
//         console.log(`Too short! minimum 8 characters required.`);
//     }
//     index++;
// } while(index < passwords.length && validPassword === "");

// *** ATM Withdrawal Validator.
// let balance = 1000;
// let withdrawAmount = 1500;
// let attempts = 0;

// do{
//     attempts++;
//     console.log(`Attempt ${attempts} Trying to withdraw $${withdrawAmount}`);
//     if(withdrawAmount <= balance){
//         balance -= withdrawAmount;
//         console.log(`Success! Withdrew $${withdrawAmount}. New balance $${balance}`);
//         break;
// }else{
//     console.log(`insufficient funds. Balance $${balance}`);
//     withdrawAmount -= 200; // reduce withdrawal amount.
// }
// } while (withdrawAmount > 0);

// *** for...of loop (ES6)
// Used to Loop through arrays, strings, map, sets, etc.

// const fruits = ["apple", "banana", "orange"];
// for(const fruit of fruits){
//     console.log(fruit);
// }

// *** Email spam filter.

// let emails = [
//     "hello@company.com",
//     "spam@lottery.com",
//     "friend@email.com",
//     "winner@fake.com",
//     "boss@work.com",
// ];
  
// let spamKeywords = ["spam", "lottery", "winner", "fake"];
// for (let email of emails){
//     let isSpam = false;
//     for(let keyword of spamKeywords){
//         if(email.includes(keyword)){
//             isSpam = true;
//             break;
//         }
//     }
//     if(isSpam){
//         console.log(`❌ SPAM ${email}`);
//     }  else{
//     console.log(`✔️ INBOX ${email}`);
// }
// }


// ** Conditional Statements
// Conditional Statement check conditions (true/false expressions) and decide what code should run.

// in Javascript, the main conditional statements are:
/*
   * `if`
   * `if...else`
   * `else if`
   * `switch`
   * `ternary operator`
   * optional chaining + nullish coalescing (modern JS).
*/

// if Statement
// Runs a block only if the condition is true.

// let age = 20;
// let if(age >= 18){
//    console.log("You are an adult"):
// };

// if...else statement
// if the condition is true -> run block A
// Else -> run block B


// let age = 15;
// if(age >= 18){
//     console.log("Adult");
// } else{
//     console.log("Minor");
// }

// else if Statement
// * Used when you need check multiple conditions.


// let score = 75;
// if(score >= 90){
//     console.log("A");
// } else if(score >= 70){
//     console.log("B");
// } else if(score >= 50){
//     console.log("C");
// } else{
//     console.log("Fail");
// } 

// ** Switch Statements
// Used when you are checking one value against many cases.
// Cleaner than many `else if` statements.


// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Teusday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//         default:
//             console.log("invalid day");
// }

// * Ternary Operator `? :`.
// Short form and   `if...else`
// Good for simple decisions.

// let age = 18;
// let message = age >= 18 ? "Adult" : "Minor";

// console.log(message);


// *** Function in Javascript.
// A function is reusable block of code that performs a specific task.
// You write function once, and use it many times.

// why use funtions?

/*
    * -> Reduce code repetition
    * -> Organize code into readable parts.
    * -> make code reusable
    * -> make programs cleaner.
*/

// ** 🧱 Basic function structure

/*
        ****************
        function greet(){
        console.log("Hello!");
        }
        ****************
*/

// * `function` -> Keyword.
// * `greet` -> function name.   
// * `()` -> parameters area
// * `{}` -> function body



/*
    To run the function:
    *********
    greet() // outputs: Hello!
    *********
*/

// * Function parameters & Arguments 
// Parameters -> placeholders inside the function
// Arguments -> actual values you pass

/* 
   ****************
   function greet(name){
   console.log("Hello " + name);
   }

   greet("Ibraheem"); // argument: "Ibraheem"
   ****************
*/



//  ⭐ Return Statement
// A function can return a value.

/*
   ********************
function add(a, b){
    return a + b;
}
    console.log(add(5, 3)); // 8
    ********************
    once `return` runs, the function stops execution.
*/

// ⭐ Default Parameters
/* 
   ********************
   function greet(name = "Guest"){
       console.log("Hello " + name);
   }
    greet(); // Hello Guest
    greet("Sam"); // Hello Sam
    **********************
*/



// * Function Declaration

// function functionName(parameters){
    // return value;
// }


// function Expressions
// A function stored in a variable
// const greet = function(){
//     console.log("Hi");
// }
// greet();

// const multiply = function(a, b){
//     return a * b;
// }

// console.log(multiply(5, 3));  // 15

// // Arrow Functions(ES6)

// const functionName = (parameters) =>  {
//     // function body.
//     return value;
    
    
// }


// single parameter (parenthesis optional)
// const square = x => x * x;


// no parameters

// const sayHello = () => "Hello";

// Implicit return
// const add = (a, b) => a+b;

// --- CALLING THEM ---
// console.log(square(5));
// console.log(sayHello());

// console.log(add(10, 20));

// // Using Math.pow()
// let result2 = Math.pow(5, 2);
// console.log(results2); // 25


// Immediately Invoked Function Expression (IIFE)
// (function(){

// })();

// or with arrow function
// (() => {
    // code here.
// })();

// ** Examples
// (function(){
//     const add = (a, b) => a + b;
//     const result = add(5, 7);
//     console.log("The sum is :", result);
// })();

(() => {
     const square = x => x * x;
    const value = square(12+67);
    console.log("The square is:", value);
})();


// Remove Duplicates from Array:

// Write a function that takes an array with duplicate elements and returns a new array containing only the unique elements.

// Example: [1, 2, 2, 3, 4, 4, 5] should return [1, 2, 3, 4, 5].

// *** ✅ SOLUTION

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))




// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

                //  solution
function redundant(str) {
	return function(){
		return str;
	}
}

const f1 = redundant("apple");
console.log(f1());



// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


// solution

function addition(num) {
	return num + 1
}
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));


// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// cubes(3)

// cubes(5) 

// cubes(10)

// solution

function cubes(a) {
	return a ** 3
}
console.log(cubes(3));
console.log(cubes(5));
console.log(cubes(10));



// Write a function that takes an integer minutes and converts it to seconds.

// Examples
convert(5)

convert(3)

convert(2)


function convert(minutes) {
	return minutes * 60
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


// creating object

// const person = {
//     name: "john",
//     age: 30,
//     greet: function(){
//         return `Hello, my name is ${this.name}`;  // a function inside object is a method
//     }
// }
// console.log(person.name);
// console.log(person.greet());


// ****** B4 ES6
// By convention, constructor functions are named starting with an uppercase Letter. Its purpose is to initialize new `person` objects.
function Person(name, age){

    // the `this` Keyword inside the constructor reffers to that newly created objects.
    this.name = name;
    this.age = age;

// * Method
    this.greet = function(){
        return `Hello, my name is ${this.name}, My age is ${this.age}.`;
    }
}

// creating instances
const person1 = new Person('John', 30);
const Person2 = new Person('Jane', 25);

console.log(person1.greet());
console.log(Person2.greet());

// *** Array properties

function Liberty(name, books){
    this.name = name;
    this.books = books || [];

    this.addBook = function(book){
        this.books.push(book);
    };
}

const Iib = new Liberty("City Libary", ["Math", "English"]);
Iib.addBook("Physics");

console.log(Iib.books);






  









