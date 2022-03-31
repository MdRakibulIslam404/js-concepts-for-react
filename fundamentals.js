// 1. how to declare a variable using let and const
const fatherName = "Arnold";
let session = "rainy";
session = "winter";

// 2. 6 basic conditions <, >, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === "arnold" || session === "rainy") {
    console.log();
}
else if (fatherName === "Arnold") {
    console.log();
}
else {
    console.log();
}

// 3. array declare
// index
// length
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. loop
for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);

// 6. object
// 3 ways to access property by name
const students = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "dhakar mastan"],
}
const myVariable = "age";
console.log(students.name); // direct via property
console.log(students["name"]); // access via property name string
console.log(students[myVariable]); // access via property name in a variable