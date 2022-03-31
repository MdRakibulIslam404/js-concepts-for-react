// 1. Array Destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
};
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

console.log(boxify(90, 34));

const students = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "dhakar mastan"],
}
// const [firstMovie, secondMovie] = ["king khan", "dhakar mastan"];
const [firstMovie, secondMovie] = students.movies;

// 2. Object Destructuring
// const { name, age } = { name: "alu", age: 14 };
const { name, age } = { id: 12, name: "alu", salary: 3400, age: 14 };
console.log(name, age);

const employee = {
    ide: "vs code",
    designation: "developer",
    machine: "mac",
    languages: ["html", "css", "js"],
    specification: {
        height: 66,
        weight: 67,
        address: "kumarkhali",
        drink: "water",
        watch: {
            color: "black",
            price: 500,
            brand: "garmin",
        }
    },
}
const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;