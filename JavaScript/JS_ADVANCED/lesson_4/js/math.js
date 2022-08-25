// ====== ES6 Module ======

// export const greeting = "Hello User";

// export function sum(num1, num2) {
//     console.log("Sum: ", num1, num2);
//     return num1 + num2;
// }
// export function substract(num1, num2) {
//     console.log("Substract: ", num1, num2);
//     return num1 - num2;
// }

// function privateLog() {
//     console.log("Private Function");
// }

const greeting = "Hello User";

function sum(num1, num2) {
    console.log("Sum: ", num1, num2);
    return num1 + num2;
}
function substract(num1, num2) {
    console.log("Substract: ", num1, num2);
    return num1 - num2;
}
export default function multiply(num1, num2) {
    console.log("Multiply: ", num1, num2);
    return num1 * num2;
}

function privateLog() {
    console.log("Private Function");
}

export {sum, substract}