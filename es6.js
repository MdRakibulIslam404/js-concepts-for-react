const numbers = [89, 35, 98, 12];

const students = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "dhakar mastan"],
}

// 1. Template string
const about = `My name is: ${students.name}, age of: ${students.age}, has number ${numbers[2]} also liked movies ${students.movies[0]}`;
console.log(about);

// 2. Arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumbers);
console.log(numbers);

// // create a new array from an older array and add an element
// const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);