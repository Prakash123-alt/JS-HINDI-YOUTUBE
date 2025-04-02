/* 

DATA-TYPES in JS:

1)PRIMITIVE DATA-TYEPS :

   1.String:
    -Represents textual data.
    -Enclosed in single quotes (' '), double quotes (" "), or backticks ().
    Example: "hello", 'world', JavaScript.

   2.Number:
    -Represents numeric values, including integers and floating-point numbers.
    -JavaScript has only one number type.
    -Also includes special values like Infinity, -Infinity, and NaN (Not-a-Number).
    Example: 42, 3.14, -10.

   3.Boolean:
    -Represents logical values.
    -Has only two possible values: true or false.
    -Used for conditional logic.

   4.Undefined:
    -Represents a variable that has been declared but has not been assigned a value.
    -A variable's default value is undefined.

   5.Null:
    -Represents the intentional absence of any object value.
    -It's an assignment value, indicating that a variable has no value.

   6.Symbol:
    -Introduced in ECMAScript 2015 (ES6).
    -Represents a unique and immutable value.
    -Primarily used as object property keys to avoid naming conflicts.

   7.BigInt:
    -Introduced relatively recently.
    -Represents integer values that are too large to be represented by the Number type.
    -Allows you to safely store and operate on large integers. 
    
2)NON-PRIMITIVE DATA-TYPES :

  1.Object : Objects are fundamental in JavaScript. They are collections of key-value pairs.   

    Example: let person = { name: "Alice", age: 30, city: "New York" };
  
  2.Array : Arrays are special types of objects used to store ordered lists of values.

    Example : let colors = ["red", "green", "blue"];

  3.Function : 
    -In JavaScript, functions are also objects.
    -They are blocks of code that can be executed.   
    -Functions can be assigned to variables, passed as arguments to other functions, and returned from functions. 
      
    Example : function greet(name) { return "Hello, " + name; }

  4.Date : The date object is used to work with dates and times.   

    Example : let today = new Date();

  5.RegExp (Regular Expressions) : 
    -Regular expressions are objects that represent patterns of text.   
    -They are used for searching, matching, and manipulating strings.

*/

const myFunction = function()
{
    console.log("Hello world."); 
}

console.log(typeof myFunction);

const obj1 = ["Akash","santhosh"];

console.log(typeof obj1);

let BigNum = 6305723894n;

console.log(typeof BigNum);
