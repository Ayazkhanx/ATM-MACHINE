#! /usr/bin/env node
import inquirer from 'inquirer';
let balance = 1000;
console.log(`your current account balance is ${balance}`.toUpperCase());
let myPin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: 'pin',
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAns.pin === myPin) {
    console.log("correct pin");
    let OpAns = await inquirer.prompt({
        name: 'operation',
        type: "list",
        message: "select method ",
        choices: ['withdraw', 'checkBalance']
    });
    if (OpAns.operation === 'withdraw') {
        let amountAns = await inquirer.prompt({
            name: 'amount',
            type: "number",
            message: "enter withdrawal amount"
        });
        if (balance < amountAns.amount) {
            console.log("sorry!! your account balance is low you can perform this transaction");
        }
        else {
            balance -= amountAns.amount;
            console.log("your remaining balance is " + balance);
        }
    }
    else if (OpAns.operation === 'checkBalance') {
        console.log(`your account balance is  ${balance}`);
    }
}
else {
    console.log('incorrect');
}
;
