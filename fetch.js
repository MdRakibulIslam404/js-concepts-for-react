// 1. JSON , stringify and parse
const students = {
    name: "salib khan",
    age: 32,
    movies: ["king khan", "dhakar mastan"],
};
const studentJSON = JSON.stringify(students);
console.log(studentJSON);
console.log(students);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data))

// 3. keys, values
const keys = Object.keys(students);
const values = Object.values(students);

// for
const numbers = [34, 55, 66, 78, 94, 34];
numbers.forEach(number => console.log());
const varName = numbers.map(number => number * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
    { name: "laptop", price: 3200, brand: "len", color: "silver" },
    { name: "phone", price: 7000, brand: "HTC", color: "golden" },
    { name: "watch", price: 3000, brand: "casio", color: "yellow" },
    { name: "sunglass", price: 300, brand: "ray", color: "black" },
    { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// copy product array and then add newProduct
const newProduct = { name: "webcam", price: 700, brand: "Lal" };
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== "phone");