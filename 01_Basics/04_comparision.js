/* 
04_comparision in js?

JavaScript provides several operators to compare values, which are essential for making decisions in your code:   

1. Equality Operators:

    == (Loose Equality) : Checks if two values are equal after performing type coercion (converting the operands to the same type).   

    Example: 1 == "1" is true.
  
    === (Strict Equality) : Checks if two values are equal without performing type coercion.   

    Example: 1 === "1" is false.
  
    != (Loose Inequality) : The opposite of ==.

    !== (Strict Inequality) : The opposite of ===.

  
2. Relational Operators:

    > (Greater Than) : Checks if the left operand is greater than the right operand.   
    
    < (Less Than) : Checks if the left operand is less than the right operand.   
  
    >= (Greater Than or Equal To) : Checks if the left operand is greater than or equal to the right operand.   
  
    <= (Less Than or Equal To) : Checks if the left operand is less than or equal to the right operand.   

*/


// console.log("2" > 1); // True

// console.log("02" > 1); // True

// console.log(1 > "2"); // False

// console.log(1 > "02"); // False

// console.log(null > 0); // False

// console.log(null == 0); // False

// console.log(null >= 0); // true

console.log(undefined == 0); // False

console.log(undefined > 0); // False

console.log(undefined < 0); // False

console.log("2" === 2); // False