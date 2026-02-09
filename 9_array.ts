// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);                 // [1, 2, 3, 4, 5]

let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits);                  // ["apple", "banana", "orange"]

let emptyNumbers: number[] = [];
console.log(emptyNumbers);            // []

// Working with Arrays
let scores: number[] = [85, 90, 78, 92];
console.log(scores);                  // [85, 90, 78, 92]

// Access elements
let firstScore = scores[0];
console.log(firstScore);              // 85

// Array methods
scores.push(88);                      
console.log(scores);                  // [85, 90, 78, 92, 88]

scores.pop();                         
console.log(scores);                  // [85, 90, 78, 92]

let len = scores.length;              
console.log(len);                     // 4

// Loop through array
for (let score of scores) {
  console.log(score);                 // 85, 90, 78, 92 (each on new line)
}
