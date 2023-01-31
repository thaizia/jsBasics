// multiply(a)(b) and return the product of a and b

const multiply = (num1) => (num2) => (num1 * num2);

console.log(multiply(2)(3));

//Currying in JavaScript transforms a function with multiple 
//arguments into a nested series of functions, each taking a 
//single argument. Currying helps you avoid passing the same 
//variable multiple times, and it helps you create a higher 
//order function. That is, when we turn a function call 
//sum(1,2,3) into sum(1)(2)(3)
