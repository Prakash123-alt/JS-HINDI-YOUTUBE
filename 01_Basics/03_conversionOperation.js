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
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLogggedIn = "Prakash";
let booleanIsLoggedIn = Boolean(isLogggedIn);
// console.log(booleanIsLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// 1 => true; 0 => false;
// "" => false;
// "Prakash" => true;

let someNumber = 33;
let stringNumber = typeof(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************************* Operations *******************************

// why conversion of STRING to NUMBER is confusion :

let value = 3;
let negValue = -value;
// console.log(negValue);

let string1 = "Prakash";
let string2 = "Rao";
// console.log(string1 + string2);

// console.log("2" + 1 + 1); // 211 -> If either operand is a string, the + operator performs string concatenation.

// console.log(2 + 1 + "1"); // 31  -> If both operands are numbers, the + operator performs numeric addition.

// console.log((2 + 3) * 5 % 2); // 1

// console.log(+"");   // '+' is used for conversion. 

// console.log(+true); // '+' is used for conversion.

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

// console.log(num1);

// console.log(num2);

// console.log(num3);

let x = 100;
console.log(x++); // 100 -> Postfix : It returns the original value of x before incrementing it. After the original value is returned, x is incremented by 1.
console.log(x);   // 101
console.log("----------------")
console.log(++x); // 101 -> Prefix : It increments x by 1 first, and then returns the new value of x.
console.log(x);   // 101

// link to study :
// https:tc39.es/ecma262/multipage/abstract-operations. 
// html#sec-type-conversion
 
