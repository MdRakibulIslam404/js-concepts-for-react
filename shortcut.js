// truthy: "text", 5, true, {}, []
// falsy: "", 0, false, null, undefined

// check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
};

// you check negative or falsy anything
let myMoney = 50;
if (!myMoney) {

};

const money = 800;
let food;
if (money > 100) {
    food = "biryani";
}
else {
    food = "cha biscuit";
};

// ternary operator
const food1 = money > 100 ? "biryani" : "cha biscuit";
console.log(food1);

const drink = (money > 100 && myVar > 100) ? "coke" : "filter water";
console.log(drink);

// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + "";
console.log(numStr);

// String to Number
const input = "560";
const inputNum = +input;
console.log(inputNum);

//
let isActive = false;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
// isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;
console.log(isActive);