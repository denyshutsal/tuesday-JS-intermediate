"use strict";

// 1. Addition
// using a loop, check each number from 200 to 2700 for compliance with the condition whether it is divisible by 3 and 5 at the same time
// if so, store the number in a temporary variable
// check if the number in this variable is divisible by 3 or 5
// if yes, add to the number in "result" variable
// console log the result

// let result = null;

// for (let i = 200; i <= 2700; i++) {
//   let tempNum;

//   if (!(i % 3 === 0 && i % 5 === 0)) {
//     tempNum = i;
//   }

//   if (tempNum % 3 === 0 || tempNum % 5 === 0) {
//     result += tempNum;
//   }
// }

// console.log(result);

// 2. Shift the Values
// loop through each number in the array, storing the number in a variable.
// on each iteration, add the number from the variable to the beginning of the empty array.
// display the result

// const x = [2, 1, 6, 4, -7];
// const result = [];

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];

//   result.unshift(element);
// }

// console.log(result);

// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

// let result = [];

// for (let i = 1; i <= 135; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     result.push("FizzBuzz");
//   } else if (i % 3 === 0) {
//     result.push("Fizz");
//   } else if (i % 5 === 0) {
//     result.push("Buzz");
//   } else {
//     result.push(i);
//   }
// }

// console.log(result);

// 4. Fibonacci
// create an array containing the first two known numbers.
// using a loop, with each iteration, we add to the end of the array the result of the sum of the two previous ones.
// Displaying the result

// let result = [0, 1];

// for (let i = 2; i <= 20; i++) {
//   result.push(result[i - 2] + result[i - 1]);
// }

// console.log(result.join());

// 5. Remove the Negative
// create an empty array
// using a loop, with each iteration we check if the number is greater than or equal to 0
// if yes, push it to an result array
// displaying the result

// const x = [1, -2, 4, 1];
// const result = [];

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];
//   if (element > 0) {
//     result.push(element);
//   }
// }

// console.log(result);

// 6. Communist Censorship
// create an empty array
// create an empty result array
// using a loop, with each iteration we check if the word is equal to 'Program' word
// if yes, using an second loop, with each iteration we add to the new variable, the symbol "*" and push the result to an result array
// if no, push the word to the result array
// displaying the result

// const x = ["Man", "I", "Love", "The", "Matrix", "Program"];
// const result = [];

// for (let i = 0; i < x.length; i++) {
//   const word = x[i];
//   let replacement = "";

//   if (word === "Program") {
//     for (let i = 0; i < word.length; i++) {
//       replacement += "*";
//     }
//     result.push(replacement);
//   } else {
//     result.push(word);
//   }
// }

// console.log(result);
