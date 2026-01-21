// Tuples are arrays with fixed length and types:

// Tuple with 2 elements: string and number
let person: [string, number];
person = ["Alice", 25];
console.log(person);              // ["Alice", 25]

// Access elements
let x1 = person[0];
let x2 = person[1];

console.log(x1);                  // Alice
console.log(x2);                  // 25

// person = [25, "Alice"];   // Error: wrong order
// person = ["Alice"];       // Error: wrong length

// More examples
let coordinate: [number, number] = [10, 20];
console.log(coordinate);          // [10, 20]

let userData: [number, string, boolean] = [1, "John", true];
console.log(userData);            // [1, "John", true]
