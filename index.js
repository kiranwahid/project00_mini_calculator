#! /usr/bin/env node
import inquirer from "inquirer";
// Asking question from user by using inquirer...
console.log(`\n\twellcome to \'Govner House' - project00_mini_calculator`);
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "num1" },
    { message: "Enter Second Number", type: "number", name: "num2" },
    {
        message: "Select one of the operators to perform task",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// console.log(answer);
// conditional statment if-else...
if (answer.operator === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Division") {
    console.log(answer.num1 / answer.num2);
}
else {
    console.log(`Select valid operator to perform task`);
}
