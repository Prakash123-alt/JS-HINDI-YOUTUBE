/* 
JavaScript's dynamic nature allows variables to hold values of different data types. 
This flexibility also necessitates the ability to convert data from one type to another. 
Here's a breakdown of data type conversion in JavaScript:

Two Main Types of Conversion:

1) Implicit Conversion (Coercion) : This happens automatically when JavaScript attempts to perform an operation involving different data types.

Example:
            -"5" + 3 results in "53" (number 3 is converted to a string).
            -"5" * 2 results in 10 (string "5" is converted to a number).

2) Explicit Conversion : This is when you intentionally convert a data type using built-in JavaScript functions.

Explicit Conversion Methods:

* Converting to a Number:

1) Number(): Converts a value to a number.

Example:
            -Number("123") returns 123.
            -Number("abc") returns NaN.
            -Number(true) returns 1.
            -Number(false) returns 0.
            -parseInt(): Parses a string and returns an integer.
            -parseInt("10px") returns 10.
            -parseInt("3.14") returns 3.
            -parseFloat(): Parses a string and returns a floating-point number.
            -parseFloat("3.14") returns 3.14.

* Converting to a String:

2) String(): Converts a value to a string.

Example:
            -String(123) returns "123".
            -String(true) returns "true".

3) .toString(): A method that can be called on most JavaScript values to convert them to a string.

Example:
            -(123).toString() returns "123".

* Converting to a Boolean:

3) Boolean(): Converts a value to a boolean.

Example:
            -Boolean("") returns false.
            -Boolean("hello") returns true.
            -Boolean(0) returns false.
            -Boolean(1) returns true.
            -Boolean(null) returns false.
            -Boolean(undefined) returns false.

*** Important Considerations:

1) Understanding implicit conversion is crucial to avoid unexpected results in your code.
2) Explicit conversion provides better control and predictability.
3) "falsy" values are values that evaluate to false when type converted to a boolean. 
   These include: 0, "", null, undefined, NaN. All other values are "truthy".

*/

let score = "33abc";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLogggedIn = "Prakash";
let booleanIsLoggedIn = Boolean(isLogggedIn);
console.log(booleanIsLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// 1 => true; 0 => false;
// "" => false;
// "Prakash" => true;

let someNumber = 33;
let stringNumber = typeof(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************************* Operations *******************************